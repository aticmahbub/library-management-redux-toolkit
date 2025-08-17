import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {useGetBookQuery, useUpdateBookMutation} from '@/redux/api/baseApi';
import {useEffect} from 'react';

function EditBookSheet({book}) {
    const id = book?._id;
    const {data, isLoading} = useGetBookQuery(id);
    const [updateBook] = useUpdateBookMutation();

    const form = useForm({
        defaultValues: {
            title: '',
            author: '',
            genre: '',
            isbn: '',
            copies: 0,
            available: false,
            description: '',
        },
    });

    useEffect(() => {
        if (data?.data) {
            const {title, author, genre, isbn, copies, available, description} =
                data.data;
            form.reset({
                title,
                author,
                genre,
                isbn,
                copies,
                available,
                description,
            });
        }
    }, [data, form]);

    if (isLoading) return <p>Loading...</p>;

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            const res = await updateBook({id, ...values}).unwrap();
            console.log('Updated book:', res);
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline'>Edit</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit Book</SheetTitle>
                    <SheetDescription>
                        Make changes to the book details. Click save when you're
                        done.
                    </SheetDescription>
                </SheetHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name='title'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Enter book title'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Author */}
                        <FormField
                            control={form.control}
                            name='author'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Author name'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Genre */}
                        <FormField
                            control={form.control}
                            name='genre'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Enter book genre'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ISBN */}
                        <FormField
                            control={form.control}
                            name='isbn'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='number'
                                            placeholder='Enter book ISBN'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Description */}
                        <FormField
                            control={form.control}
                            name='description'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Description'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Copies */}
                        <FormField
                            control={form.control}
                            name='copies'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Copies</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='number'
                                            placeholder='Copies'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Available Checkbox */}
                        <FormField
                            control={form.control}
                            name='available'
                            render={({field}) => (
                                <FormItem className='flex items-center space-x-2'>
                                    <FormLabel>Available</FormLabel>
                                    <FormControl>
                                        <input
                                            type='checkbox'
                                            checked={!!field.value}
                                            onChange={(e) =>
                                                field.onChange(e.target.checked)
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <SheetFooter>
                            <Button type='submit'>Save changes</Button>
                            <SheetClose asChild>
                                <Button variant='outline'>Close</Button>
                            </SheetClose>
                        </SheetFooter>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    );
}

export default EditBookSheet;

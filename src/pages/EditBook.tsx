import {useForm, type SubmitHandler} from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {useGetBookQuery, useUpdateBookMutation} from '@/redux/api/baseApi';
import {useParams} from 'react-router';
import {useEffect} from 'react';
import type {IBook} from '@/types';

type BookFormValues = Omit<IBook, '_id'>;

export default function EditBook() {
    const {id} = useParams<{id: string}>();
    const {data, isLoading} = useGetBookQuery(id);
    const [updateBook] = useUpdateBookMutation();

    const form = useForm<BookFormValues>({
        defaultValues: {
            title: '',
            author: '',
            genre: 'NONE',
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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const onSubmit: SubmitHandler<BookFormValues> = async (values) => {
        try {
            const res = await updateBook({id, ...values}).unwrap();
            console.log('Book updated:', res);
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
                                <Input placeholder='Author name' {...field} />
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
                                    type='text'
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
                                <Input placeholder='Description' {...field} />
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

                {/* Available */}
                <FormField
                    control={form.control}
                    name='available'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Available</FormLabel>
                            <FormControl>
                                <input
                                    type='checkbox'
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type='submit'>Submit</Button>
            </form>
        </Form>
    );
}

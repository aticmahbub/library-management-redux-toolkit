import {useForm, type SubmitHandler, type FieldValues} from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {useCreateBookMutation} from '@/redux/api/baseApi';
import toast, {Toaster} from 'react-hot-toast';
import {Spinner} from '@/components/ui/shadcn-io/spinner';
import {useNavigate} from 'react-router';
import {Textarea} from '@/components/ui/textarea';

export default function AddBook() {
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            title: '',
            author: '',
            genre: '',
            isbn: '',
            description: '',
            copies: '',
            available: true,
        },
    });

    const [createBook, {isLoading}] = useCreateBookMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            const result = await createBook(values).unwrap();
            toast.success(result.message);
            form.reset();

            setTimeout(() => {
                navigate('/books');
            }, 1000);
        } catch (error: any) {
            console.error(error?.data?.error?.message);
            toast.error(error?.data?.error?.message || 'Failed to create book');
        }
    };

    return (
        <div>
            <Toaster />
            {isLoading ? (
                <div className='flex justify-center py-10'>
                    <Spinner variant='bars' size={64} />
                </div>
            ) : (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name='title'
                            rules={{required: 'Title is required'}}
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
                            rules={{required: 'Author is required'}}
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
                            rules={{required: 'Genre is required'}}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Genre</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className='w-[180px]'>
                                                <SelectValue placeholder='Select a genre' />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Genre
                                                    </SelectLabel>
                                                    <SelectItem value='FICTION'>
                                                        Fiction
                                                    </SelectItem>
                                                    <SelectItem value='NON_FICTION'>
                                                        Non-Fiction
                                                    </SelectItem>
                                                    <SelectItem value='SCIENCE'>
                                                        Science
                                                    </SelectItem>
                                                    <SelectItem value='HISTORY'>
                                                        History
                                                    </SelectItem>
                                                    <SelectItem value='BIOGRAPHY'>
                                                        Biography
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ISBN */}
                        <FormField
                            control={form.control}
                            name='isbn'
                            rules={{required: 'ISBN is required'}}
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
                            rules={{required: 'Description is required'}}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder='Type about the book.'
                                            id='description'
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
                            rules={{required: 'Copies count is required'}}
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
                                <FormItem className='flex items-center gap-2'>
                                    <FormControl>
                                        <input
                                            type='checkbox'
                                            checked={field.value}
                                            onChange={(e) =>
                                                field.onChange(e.target.checked)
                                            }
                                        />
                                    </FormControl>
                                    <FormLabel>Available</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
            )}
        </div>
    );
}

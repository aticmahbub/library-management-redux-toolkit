import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';
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

export default function EditBook() {
    const {id} = useParams();
    console.log(id);
    const {data, isLoading} = useGetBookQuery(id);
    // console.log(data);
    const [updateBook] = useUpdateBookMutation();

    const form = useForm();

    useEffect(() => {
        if (data?.data) {
            form.reset({
                title: data.data.title,
                author: data.data.author,
                genre: data.data.genre,
                isbn: data.data.isbn,
                copies: data.data.copies,
                available: data.data.available,
                description: data.data.description,
            });
        }
    }, [data, form]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        const res = await updateBook({id, ...values});
        console.log(res);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
                                    onChange={field.onChange}
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

import {useForm, type FieldValues, type SubmitHandler} from 'react-hook-form';
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

export default function AddBook() {
    const form = useForm();

    const [createBook, data] = useCreateBookMutation();
    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        createBook(values);
        console.log({values, data});
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
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <SelectTrigger className='w-[180px]'>
                                        <SelectValue placeholder='Select a genre' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Genre</SelectLabel>
                                            <SelectItem value='FICTION'>
                                                Fiction
                                            </SelectItem>
                                            <SelectItem value='NON_FICTION'>
                                                NON_FICTION
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
    );
}

import {Spinner} from '@/components/ui/shadcn-io/spinner';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {useGetBookQuery} from '@/redux/api/baseApi';
import type {IBook} from '@/types';
import {useParams} from 'react-router';

function Book() {
    const {id} = useParams();
    const {data, isLoading, error} = useGetBookQuery(id);
    if (isLoading) {
        return (
            <div className='flex justify-center py-10'>
                <Spinner variant='bars' size={64} />
            </div>
        );
    }
    if (error) return <p>Failed to fetch book</p>;

    const book: IBook | undefined = data?.data;
    if (!book) return <p>Book not found</p>;
    const {title, author, genre, isbn, copies, available} = data.data;
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[100px]'>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead className='text-right'>ISBN</TableHead>
                    <TableHead className='text-right'>Copies</TableHead>
                    <TableHead className='text-right'>Availability</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className='font-medium'>{title}</TableCell>
                    <TableCell>{author}</TableCell>
                    <TableCell>{genre}</TableCell>
                    <TableCell className='text-right'>{isbn}</TableCell>
                    <TableCell className='text-right'>{copies}</TableCell>
                    <TableCell className='text-right'>
                        {available ? 'Yes' : 'No'}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default Book;

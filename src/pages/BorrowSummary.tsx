import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {useGetBorrowQuery} from '@/redux/api/baseApi';

export default function BorrowSummary() {
    const {data, isLoading, error} = useGetBorrowQuery(undefined);
    const smth = data?.data.map((item) => item.book);
    console.log(smth);
    if (isLoading) {
        return <p>Loading books...</p>;
    }

    if (error) {
        return <p>Error fetching books</p>;
    }
    return (
        <Table>
            <TableCaption>A list of borrowed books.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[100px]'>Title</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>Borrowed</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.data.map((book) => (
                    <TableRow key={book._id}>
                        <TableCell className='font-medium'>
                            {book?.book.title}
                        </TableCell>
                        <TableCell>{book?.book.isbn}</TableCell>
                        <TableCell>{book?.totalQuantity}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className='text-right'>$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

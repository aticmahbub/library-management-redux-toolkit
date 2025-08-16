import {useGetBooksQuery} from '@/redux/api/baseApi';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type {IBook} from '@/types';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router';
function Books() {
    const {data, error, isLoading} = useGetBooksQuery(undefined);
    console.log(data);
    if (isLoading) {
        return <p>Loading books...</p>;
    }

    if (error) {
        return <p>Error fetching books</p>;
    }

    return (
        <div>
            <Button>
                <Link to={'/create-book'}>Add Book +</Link>
            </Button>
            <Table>
                <TableCaption>A list of all Books.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead className='text-right'>ISBN</TableHead>
                        <TableHead className='text-right'>Copies</TableHead>
                        <TableHead className='text-right'>
                            Availability
                        </TableHead>
                        <TableHead className='text-right'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.data.map((book: IBook) => {
                        const {
                            _id,
                            title,
                            author,
                            genre,
                            isbn,
                            copies,
                            available,
                        } = book;
                        return (
                            <TableRow key={_id}>
                                <TableCell className='font-medium'>
                                    {title}
                                </TableCell>
                                <TableCell>{author}</TableCell>
                                <TableCell>{genre}</TableCell>
                                <TableCell className='text-right'>
                                    {isbn}
                                </TableCell>
                                <TableCell className='text-right'>
                                    {copies}
                                </TableCell>
                                <TableCell>{available}</TableCell>
                                <TableCell className='flex gap-5'>
                                    <Button>
                                        <Link to={`/book/${_id}`}>View</Link>
                                    </Button>
                                    <Button>
                                        {' '}
                                        <Link to={`/edit-book/${_id}`}>
                                            Edit
                                        </Link>
                                    </Button>
                                    <Button>
                                        {' '}
                                        <Link to={`/delete-book/${_id}`}>
                                            Delete
                                        </Link>
                                    </Button>
                                    <Button>
                                        {' '}
                                        <Link to={`/book/${_id}`}>Borrow</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

export default Books;

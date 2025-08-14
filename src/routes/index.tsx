import App from '@/App';
import AddBook from '@/pages/AddBook';
import Books from '@/pages/Books';
import BorrowBook from '@/pages/BorrowBook';
import BorrowSummary from '@/pages/BorrowSummary';
import EditBook from '@/pages/EditBook';
import SingleBook from '@/pages/SingleBook';
import {createBrowserRouter} from 'react-router';
export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/books',
                Component: Books,
            },
            {
                path: '/create-book',
                Component: AddBook,
            },
            {
                path: '/borrow-summary',
                Component: BorrowSummary,
            },
            {
                path: '/books/:id',
                Component: SingleBook,
            },
            {
                path: '/edit-book/:id',
                Component: EditBook,
            },
            {
                path: '/borrow/:id',
                Component: BorrowBook,
            },
        ],
    },
]);

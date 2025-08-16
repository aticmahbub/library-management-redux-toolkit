import App from '@/App';
import AddBook from '@/pages/AddBook';
import Book from '@/pages/Book';
import Books from '@/pages/Books';
import BorrowBook from '@/pages/BorrowBook';
import BorrowSummary from '@/pages/BorrowSummary';
import EditBook from '@/pages/EditBook';
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
                path: '/book/:id',
                Component: Book,
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

import App from '@/App';
import AddBook from '@/pages/AddBook';
import AllBooks from '@/pages/AllBooks';
import BorrowSummary from '@/pages/BorrowSummary';
import {createBrowserRouter} from 'react-router';
export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/books',
                Component: AllBooks,
            },
            {
                path: '/create-book',
                Component: AddBook,
            },
            {
                path: '/borrow-summary',
                Component: BorrowSummary,
            },
        ],
    },
]);

import {Button} from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {useDeleteBookMutation} from '@/redux/api/baseApi';
import type {IBookProps} from '@/types';

function DeleteBookModal({book}: IBookProps) {
    const [deleteBook, {isLoading}] = useDeleteBookMutation();

    const handleDelete = async () => {
        try {
            await deleteBook(book._id).unwrap();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='destructive'>Delete</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>
                        Are you sure you want to delete this?
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='space-x-2'>
                    <Button
                        variant='destructive'
                        onClick={handleDelete}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Deleting...' : 'Confirm'}
                    </Button>
                    <DialogClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DeleteBookModal;

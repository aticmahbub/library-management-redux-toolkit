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

function DeleteBookModal({book}) {
    const [deleteBook] = useDeleteBookMutation();
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant='destructive'>Delete</Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Are you sure to delete this?</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                onClick={() => deleteBook(book._id)}
                                variant='destructive'
                            >
                                Confirm
                            </Button>
                        </DialogClose>
                        <Button type='submit'>Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}

export default DeleteBookModal;

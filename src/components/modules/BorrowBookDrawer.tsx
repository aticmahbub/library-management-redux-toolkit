import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import {CalendarIcon, Minus, Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Calendar} from '@/components/ui/calendar';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {useState} from 'react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {useForm, type SubmitHandler} from 'react-hook-form';
import {cn} from '@/lib/utils';
import {format} from 'date-fns';
import {useBorrowBookMutation} from '@/redux/api/baseApi';
import type {IBookProps} from '@/types';

function BorrowBookDrawer({book}: IBookProps) {
    const [borrowBook] = useBorrowBookMutation();
    interface IBorrowForm {
        dueDate: Date | undefined;
    }
    const form = useForm<IBorrowForm>();
    const [borrowCount, setBorrowCount] = useState(0);

    const increment = () => {
        if (borrowCount < book.copies) {
            setBorrowCount(borrowCount + 1);
        }
    };

    const decrement = () => {
        if (borrowCount > 1) {
            setBorrowCount(borrowCount - 1);
        }
    };

    const onSubmit: SubmitHandler<IBorrowForm> = (data) => {
        const borrowData = {
            id: book?._id,
            quantity: borrowCount,
            dueDate: data?.dueDate,
        };
        console.log(borrowData);
        borrowBook(borrowData);
    };

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant='outline'>Borrow</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm flex flex-col items-center'>
                    <DrawerHeader>
                        <DrawerTitle>Borrow Book</DrawerTitle>
                        <DrawerDescription>{book.title}</DrawerDescription>
                    </DrawerHeader>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className='w-full p-4'
                        >
                            {/* Quantity counter */}
                            <div className='flex items-center justify-center space-x-2 mb-6'>
                                <Button
                                    variant='outline'
                                    size='icon'
                                    className='h-8 w-8 shrink-0 rounded-full'
                                    type='button'
                                    onClick={decrement}
                                    disabled={borrowCount <= 1}
                                >
                                    <Minus />
                                    <span className='sr-only'>Decrease</span>
                                </Button>
                                <div className='flex-1 text-center'>
                                    <div className='text-7xl font-bold tracking-tighter'>
                                        {borrowCount}
                                    </div>
                                    <div className='text-muted-foreground text-[0.70rem] uppercase'>
                                        Remaining: {book.copies - borrowCount}
                                    </div>
                                </div>
                                <Button
                                    variant='outline'
                                    size='icon'
                                    className='h-8 w-8 shrink-0 rounded-full'
                                    type='button'
                                    onClick={increment}
                                    disabled={borrowCount >= book.copies}
                                >
                                    <Plus />
                                    <span className='sr-only'>Increase</span>
                                </Button>
                            </div>

                            {/* Due date  */}
                            <FormField
                                control={form.control}
                                name='dueDate'
                                rules={{required: 'Due date is required'}}
                                render={({field}) => (
                                    <FormItem className='flex flex-col mb-6'>
                                        <FormLabel>Due date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant='outline'
                                                        className={cn(
                                                            'pl-3 text-left font-normal',
                                                            !field.value &&
                                                                'text-muted-foreground',
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                'PPP',
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className='w-auto p-0'
                                                align='start'
                                            >
                                                <Calendar
                                                    mode='single'
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    captionLayout='dropdown'
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <DrawerFooter>
                                <Button type='submit'>Borrow</Button>
                                <DrawerClose asChild>
                                    <Button variant='outline'>Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </Form>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default BorrowBookDrawer;

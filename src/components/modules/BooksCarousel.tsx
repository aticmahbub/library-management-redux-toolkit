import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import {useGetBooksQuery} from '@/redux/api/baseApi';
import type {IBook} from '@/types';
import {Spinner} from '../ui/shadcn-io/spinner';
// import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip';
// import {CircleHelpIcon} from 'lucide-react';
import {Button} from '../ui/button';
import {Link} from 'react-router';
import EditBookSheet from './EditBookSheet';
import DeleteBookModal from './DeleteBookModal';
import BorrowBookDrawer from './BorrowBookDrawer';

export default function BooksCarousel() {
    const {data, error, isLoading} = useGetBooksQuery(undefined) as {
        data?: {data: IBook[]};
        error?: unknown;
        isLoading: boolean;
    };
    if (isLoading) {
        return (
            <div className='flex justify-center py-10'>
                return <Spinner variant='bars' size={64} />
            </div>
        );
    }

    if (error) {
        return <p>Error fetching books</p>;
    }

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className='w-full max-w-screen'
        >
            <CarouselContent>
                {data?.data.map((book: IBook) => (
                    <CarouselItem
                        key={book._id}
                        className='md:basis-1/2 lg:basis-1/3'
                    >
                        <div className='p-1'>
                            <Card className='max-w-xs'>
                                <CardHeader>
                                    <CardTitle className='text-2xl font-bold'>
                                        {book.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {book.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className='text-sm text-muted-foreground flex items-end leading-6'>
                                    <span className='text-4xl leading-none font-bold text-foreground'>
                                        {book.genre}
                                    </span>
                                    {/* <span className='ml-1.5 mr-1'>Genre</span>
                                    <Tooltip>
                                        <TooltipTrigger className='mb-1'>
                                            <CircleHelpIcon className='h-4 w-4' />
                                        </TooltipTrigger>
                                        <TooltipContent className='max-w-xs'>
                                            <p>
                                                Seats are required for users to
                                                connect calendars and create
                                                Calendly links to help book
                                                meetings - meeting invitees do
                                                not require an account or seat.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip> */}
                                </CardContent>
                                <CardFooter className='mt-2 flex gap-4 justify-between'>
                                    <div className='grid gap-4'>
                                        <Button size='default'>
                                            <Link to={`/book/${book._id}`}>
                                                View
                                            </Link>
                                        </Button>
                                        <BorrowBookDrawer book={book} />
                                    </div>

                                    <div>
                                        <EditBookSheet book={book} />
                                        <DeleteBookModal book={book} />
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

import {ArrowRight} from 'lucide-react';
import heroImg from '../assets/image.png';
import {Button} from '@/components/ui/button';

const Hero34 = () => {
    return (
        <section>
            <div className='container'>
                <div className='bg-[#f1f1f1] grid items-center gap-8 lg:grid-cols-2'>
                    <div className='flex flex-col items-center p-16 text-center lg:items-start lg:text-left'>
                        <p className='text-[#E59285]'>Atic's</p>
                        <h1 className='text-[#3c3c3c] my-6 text-pretty text-4xl font-bold lg:text-6xl'>
                            Library Management System
                        </h1>
                        <p className='text-[#585858]-foreground mb-8 max-w-xl lg:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Elig doloremque mollitia fugiat omnis! Porro
                            facilis quo animi consequatur. Explicabo.
                        </p>
                        <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
                            <Button>
                                Primary
                                <ArrowRight className='size-4' />
                            </Button>
                            <Button variant='outline'>Secondary</Button>
                        </div>
                    </div>
                    <img
                        src={heroImg}
                        alt='placeholder hero'
                        className='h-full w-full '
                    />
                </div>
            </div>
        </section>
    );
};

export {Hero34};

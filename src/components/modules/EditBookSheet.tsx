import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

function EditBookSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline'>Edit</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Borrow Book</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                    </SheetDescription>
                </SheetHeader>
                <div className='grid flex-1 auto-rows-min gap-6 px-4'>
                    <div className='grid gap-3'>
                        <Label htmlFor='quantity'>Quantity</Label>
                        <Input
                            id='sheet-demo-name'
                            defaultValue='Pedro Duarte'
                        />
                    </div>
                </div>
                <SheetFooter>
                    <Button type='submit'>Save changes</Button>
                    <SheetClose asChild>
                        <Button variant='outline'>Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}

export default EditBookSheet;

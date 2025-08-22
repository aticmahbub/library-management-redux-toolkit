import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {NavLink} from 'react-router';
import logo from '../assets/library-management.png';

function NavBar() {
    const navLinks = [
        {title: 'Home', href: '/'},
        {title: 'Books', href: '/books'},
        {title: 'Add Book', href: '/create-book'},
        {title: 'Borrow Summary', href: '/borrow-summary'},
    ];

    return (
        <header className='w-[1440px] h-[80px] flex items-center justify-between px-[80px]'>
            <NavLink to='/' className='flex items-center gap-2'>
                <img
                    src={logo}
                    alt='Library Logo'
                    className='w-[147px] h-[90px]'
                />
            </NavLink>

            <NavigationMenu>
                <NavigationMenuList className='flex items-center gap-8'>
                    {navLinks.map((link) => (
                        <NavigationMenuItem
                            className='text-[#333333] leading-6'
                            key={link.href}
                        >
                            <NavigationMenuLink asChild>
                                <NavLink to={link.href}>{link.title}</NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}

export default NavBar;

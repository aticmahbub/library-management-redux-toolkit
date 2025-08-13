import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import {NavLink} from 'react-router';

function NavBar() {
    const navLinks = [
        {title: 'All Books', href: '/books'},
        {title: 'Add Book', href: '/create-book'},
        {title: 'Borrow Summary', href: '/borrow-summary'},
    ];

    return (
        <header>
            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.href}>
                                <NavigationMenuLink asChild>
                                    <NavLink to={link.href}>
                                        {link.title}
                                    </NavLink>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}

export default NavBar;

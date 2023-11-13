import { Navbar, NavbarBrand, NavbarToggle, DarkThemeToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} to="/">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <div className="ml-auto">
                <DarkThemeToggle />
            </div>
        </Navbar>
    );
}

export default NavbarComponent;

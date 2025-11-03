// components/Navbar/Navbar.tsx

import NavLinks from '../NavLinks/NavLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';

function Navbar() {
	return (
		<nav className="Navbar">
			<NavLinks />
			<HamburgerMenu />
		</nav>
	);
}

export default Navbar;

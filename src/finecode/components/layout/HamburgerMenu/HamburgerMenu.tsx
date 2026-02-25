// components/HamburgerMenu/HamburgerMenu.tsx

import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Frame from '../../common/Frame/Frame';
import './HamburgerMenu.css';

function HamburgerMenu() {
const [isOpen, setIsOpen] = useState(false);
const [dropdownAbove, setDropdownAbove] = useState(false);
const buttonRef = useRef<HTMLDivElement>(null);

const handleToggle = () => {
if (buttonRef.current) {
const rect = buttonRef.current.getBoundingClientRect();
const isInBottomHalf = rect.top > window.innerHeight / 2;
setDropdownAbove(isInBottomHalf);
}
setIsOpen(!isOpen);
};

const handleLinkClick = () => {
setIsOpen(false);
};

return (
<div className="hamburger-menu" ref={buttonRef}>
<button
className="hamburger-button"
onClick={handleToggle}
aria-label={isOpen ? 'Close menu' : 'Open menu'}
aria-expanded={isOpen}
>
<span className="hamburger-icon"></span>
</button>
{isOpen && (
<div className={`hamburger-links-container ${dropdownAbove ? 'dropdown-above' : 'dropdown-below'}`}>
<ul className="hamburger-links">
<li>
<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>
<i className="nf nf-oct-person_fill" /> <span>About</span>
</NavLink>
</li>
<li>
<NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>
<i className="nf nf-oct-briefcase" /> <span>Portfolio</span>
</NavLink>
</li>
<li>
<NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>
<i className="nf nf-oct-log" /> <span>Resum&eacute;</span>
</NavLink>
</li>
<li>
<NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>
<i className="nf nf-fa-book_journal_whills" /> <span>Blog</span>
</NavLink>
</li>
<li>
<NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLinkClick}>
<i className="nf nf-md-email_newsletter" /> <span>Contact</span>
</NavLink>
</li>
</ul>
<Frame className="hamburger-frame all"></Frame>
</div>
)}
</div>
);
}

export default HamburgerMenu;

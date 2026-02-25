// components/NavLinks/NavLinks.tsx

import { NavLink } from 'react-router-dom';
import './NavLinks.css';

function NavLinks() {
return (
<div className="NavLinks-container">
<ul className="navbar-links">
<li>
<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
<i className="nf nf-oct-person_fill"> <span>About</span></i>
</NavLink>
</li>
<li>
<NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
<i className="nf nf-oct-briefcase"> <span>Portfolio</span></i>
</NavLink>
</li>
<li>
<NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>
<i className="nf nf-oct-log"> <span>Resumé</span></i>
</NavLink>
</li>
<li>
<NavLink
to="https://medium.com/@ace.d.baugh"
target="_blank"
rel="noreferrer"
className=""
>
<i className="nf nf-fa-book_journal_whills"> <span>Blog</span></i>
</NavLink>
</li>
<li>
<NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
<i className="nf nf-md-email_newsletter"> <span>Contact</span></i>
</NavLink>
</li>
</ul>
</div>
);
}

export default NavLinks;

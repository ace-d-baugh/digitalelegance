// components/NavLinks/NavLinks.tsx

import { Link } from 'react-router-dom';
import './NavLinks.css';

function NavLinks() {
	return (
		<div className="NavLinks-container">
			<ul className="navbar-links">
				<li>
					<Link to="/about">
						<i className="nf nf-oct-person_fill"> <span>About</span></i>
					</Link>
				</li>
				<li>
					<Link to="/portfolio">
						<i className="nf nf-oct-briefcase"> <span>Portfolio</span></i>
					</Link>
				</li>
				<li>
					<Link to="/resume">
						<i className="nf nf-oct-log"> <span>Resumé</span></i>
					</Link>
				</li>
				<li>
					<Link to="https://medium.com/@ace.d.baugh" target="_blank">
						<i className="nf nf-fa-book_journal_whills"> <span>Blog</span></i>
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<i className="nf nf-md-email_newsletter"> <span>Contact</span></i>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavLinks;

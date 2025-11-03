// components/HamburgerMenu/HamburgerMenu.tsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Frame from '../../common/Frame/Frame';
import './HamburgerMenu.css';

function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburger-menu">
			<button className="hamburger-button" onClick={handleToggle}>
				<span className="hamburger-icon"></span>
			</button>
			{isOpen && (
				<div className="hamburger-links-container">
					<ul className="hamburger-links">
						<li>
							<Link to="/about">
								<i className="nf nf-oct-person_fill" /> <span>About</span>
							</Link>
						</li>
						<li>
							<Link to="/portfolio">
								<i className="nf nf-oct-briefcase" /> <span>Portfolio</span>
							</Link>
						</li>
						<li>
							<Link to="/resume">
								<i className="nf nf-oct-log" /> <span>Resumé</span>
							</Link>
						</li>
						<li>
							<Link to="/blog">
								<i className="nf nf-fa-book_journal_whills" /> <span>Blog</span>
							</Link>
						</li>
						<li>
							<Link to="/contact">
								<i className="nf nf-md-email_newsletter" /> <span>Contact</span>
							</Link>
						</li>
					</ul>
					<Frame className="hamburger-frame all"></Frame>
				</div>
			)}
			
		</div>
	);
}

export default HamburgerMenu;

// components/Footer/Footer.tsx

import { Link } from 'react-router-dom';
import './Footer.css'

function Footer({ company }: { company: string }) {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/resume">Resum&eacute;</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <ul className="footer-links">
                <li className="footer-link">
                    <a href="https://github.com/ace-d-baugh" target="_blank" >
                        <i className="nf nf-fa-github">
                            <span className="ml-1">GitHub</span>
                        </i>
                    </a>
                </li>
                <li className="footer-link">
                    <a href="https://www.linkedin.com/in/ace-d-baugh/" target="_blank">
                        <i className="nf nf-md-linkedin">
                            <span className="ml-1">LinkedIn</span>
                        </i>
                    </a>
                </li>
                <li className="footer-link">
                    <a href="https://x.com/acieffe" target="_blank">
                        <i className="nf nf-fa-twitter_square">
                            <span className="icon-name ml-1">Twitter/X</span>
                        </i>
                    </a>
                </li>
            </ul>
            <p>&copy; {new Date().getFullYear()} {company}. All rights reserved.</p>
        </footer>
    );
}

export default Footer
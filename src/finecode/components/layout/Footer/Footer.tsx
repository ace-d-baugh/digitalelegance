// components/Footer/Footer.tsx

import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer({ company }: { company: string }) {
    return (
        <footer className="footer">
            <div className="footer-deco-border"></div>

            <div className="footer-inner">
                {/* Brand */}
                <div className="footer-brand">
                    <span className="footer-logo">{company}</span>
                    <span className="footer-tagline">Full-Stack &amp; Frontend Developer</span>
                </div>

                {/* Ornamental divider */}
                <div className="footer-ornament">
                    <span className="footer-ornament-line"></span>
                    <span className="footer-ornament-diamond">◆</span>
                    <span className="footer-ornament-line"></span>
                </div>

                {/* Nav Links with diamond separators */}
                <nav className="footer-nav" aria-label="Footer navigation">
                    <ul className="footer-links">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li className="footer-sep" aria-hidden="true">◆</li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li className="footer-sep" aria-hidden="true">◆</li>
                        <li><NavLink to="/resume">Resum&eacute;</NavLink></li>
                        <li className="footer-sep" aria-hidden="true">◆</li>
                        <li>
                            <a href="https://medium.com/@ace.d.baugh" target="_blank" rel="noreferrer">
                                Blog
                            </a>
                        </li>
                        <li className="footer-sep" aria-hidden="true">◆</li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>

                {/* Social Icons */}
                <div className="footer-social">
                    <a
                        href="https://github.com/ace-d-baugh"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                        aria-label="GitHub"
                    >
                        <i className="nf nf-fa-github"></i>
                        <span>GitHub</span>
                    </a>
                    <span className="footer-social-sep" aria-hidden="true">◆</span>
                    <a
                        href="https://www.linkedin.com/in/ace-d-baugh/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                        aria-label="LinkedIn"
                    >
                        <i className="nf nf-md-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <span className="footer-social-sep" aria-hidden="true">◆</span>
                    <a
                        href="https://x.com/acieffe"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                        aria-label="Twitter / X"
                    >
                        <i className="nf nf-fa-twitter_square"></i>
                        <span>Twitter/X</span>
                    </a>
                </div>

                {/* Bottom ornament + copyright */}
                <div className="footer-ornament">
                    <span className="footer-ornament-line"></span>
                    <span className="footer-ornament-diamond">◆</span>
                    <span className="footer-ornament-line"></span>
                </div>

                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} {company}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

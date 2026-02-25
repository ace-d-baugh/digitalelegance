// components/layout/HomeNavbar/HomeNavbar.tsx

import { useEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './HomeNavbar.css';

function HomeNavbar() {
  const sentinelRef = useRef<HTMLDivElement>(null); // watches sentinel, NOT the nav
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel scrolls above the viewport top,
        // entry.isIntersecting becomes false -> nav has reached the top
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel: 1px invisible marker just above the sticky nav.
          When it scrolls off-screen, the nav has reached the top. */}
      <div ref={sentinelRef} style={{ height: '1px', width: '100%' }} aria-hidden="true" />
      <nav
        className={`HomeNavbar${isSticky ? ' is-sticky' : ''}`}
        aria-label="Site navigation"
      >
        <div className="home-navbar-bg" />
        <div className="home-navbar-content">
          <Logo logoText="Digital Elegance" />
          <NavLinks />
          <HamburgerMenu />
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;

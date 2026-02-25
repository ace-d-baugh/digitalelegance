// components/LogoScroll/LogoScroll.tsx

import { useRef, useEffect } from 'react';
import './LogoScroll.css'

function LogoScroll() {
    const logos = [
        { src: "/src/assets/images/logos/disney.png", alt: "The Walt Disney Company" },
        { src: "/src/assets/images/logos/carmike.png", alt: "Carmike Cinemas" },
        { src: "/src/assets/images/logos/rfinity.png", alt: "RFinity" },
        { src: "/src/assets/images/logos/schwans.png", alt: "Schwan Food Co" },
        { src: "/src/assets/images/logos/blockbuster.png", alt: "Blockbuster" },
        { src: "/src/assets/images/logos/misys.png", alt: "Misys" },
        { src: "/src/assets/images/logos/magnus.png", alt: "First Magnus" },
        { src: "/src/assets/images/logos/sears.png", alt: "Sears" },
        { src: "/src/assets/images/logos/kbtoys.png", alt: "KB Toys" },
    ];

    const setRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const measureAndAnimate = () => {
            if (!setRef.current || !trackRef.current) return;
            // Measure the pixel width of exactly ONE set of logos
            const oneSetWidth = setRef.current.offsetWidth;
            // Apply as CSS custom property — animation uses this exact pixel distance
            trackRef.current.style.setProperty('--one-set-width', `${oneSetWidth}px`);
        };

        // Measure after fonts/images load
        measureAndAnimate();
        window.addEventListener('resize', measureAndAnimate);

        // Also re-measure after images finish loading
        const images = trackRef.current?.querySelectorAll('img');
        images?.forEach(img => {
            if (!img.complete) img.addEventListener('load', measureAndAnimate);
        });

        return () => window.removeEventListener('resize', measureAndAnimate);
    }, []);

    // Render logos 4 times — guarantees screen is always covered on any display
    // Only the FIRST set is measured (setRef), rest follow seamlessly
    const renderSet = (prefix: string, hidden: boolean) => (
        logos.map((logo, index) => (
            <img
                key={`${prefix}-${index}`}
                src={logo.src}
                alt={hidden ? '' : logo.alt}
                aria-hidden={hidden || undefined}
                title={hidden ? undefined : logo.alt}
                className="logos-item"
            />
        ))
    );

    return (
        <div className="LogoScroll">
            <h2 className="logos-title">Trusted By</h2>
            <div className="logos-track" ref={trackRef}>
                {/* First set — measured for pixel-accurate animation */}
                <div className="logos-set" ref={setRef}>
                    {renderSet('a', false)}
                </div>
                {/* Additional sets — fills wide screens, seamless continuation */}
                <div className="logos-set" aria-hidden="true">{renderSet('b', true)}</div>
                <div className="logos-set" aria-hidden="true">{renderSet('c', true)}</div>
                <div className="logos-set" aria-hidden="true">{renderSet('d', true)}</div>
            </div>
        </div>
    );
}

export default LogoScroll;

// components/LogoScroll/LogoScroll.tsx

import './LogoScroll.css'

function LogoScroll() {
    // Define logos array for reusability
    const logos = [
        { src: "images/disney.png", alt: "The Walt Disney Company" },
        { src: "images/carmike.png", alt: "Carmike Cinemas" },
        { src: "images/rfinity.png", alt: "RFinity" },
        { src: "images/schwans.png", alt: "Schwans" },
        { src: "images/blockbuster.png", alt: "Blockbuster" },
        { src: "images/misys.png", alt: "Misys" },
        { src: "images/magnus.png", alt: "First Magnus" },
        { src: "images/sears.png", alt: "Sears" },
        { src: "images/kbtoys.png", alt: "KB Toys" },
    ];

    return (
        <div className="LogoScroll">
            <div className="logos">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <img
                        key={`logo-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                    />
                ))}
                {/* Duplicate set of logos for seamless scroll */}
                {logos.map((logo, index) => (
                    <img
                        key={`logo-duplicate-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                    />
                ))}
            </div>
        </div>
    );
}

export default LogoScroll;
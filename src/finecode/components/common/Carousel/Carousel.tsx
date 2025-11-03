import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
    imageUrls: string[];
    title?: string; // Optional title prop for display
}

const Carousel: React.FC<CarouselProps> = ({ imageUrls, title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // --- Navigation Handlers ---

    // Function to advance to the next image
    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % imageUrls.length
        );
    };

    // Function to go to the previous image
    const goToPrev = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + imageUrls.length) % imageUrls.length
        );
    };

    // Function to go to a specific image index
    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
        // Optional: Pause the auto-advance when a user manually navigates
        setIsPaused(true); 
    };

    // --- Automatic Cycling Effect ---
    useEffect(() => {
      // NOTE: Original interval was 1000ms, changed to 3000ms in your code. Using 3000ms here.
        if (!isPaused && imageUrls.length > 0) {
            const interval = setInterval(goToNext, 3000);

            return () => clearInterval(interval);
        }
    }, [isPaused, imageUrls.length]);

    // --- Pause/Resume Handlers ---
    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    // Return null if no images are provided
    if (imageUrls.length === 0) {
        return null;
    }

    return (
        <div 
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Left Chevron Button */}
            <button 
                className="carousel-button prev"
                onClick={goToPrev}
                aria-label="Previous image"
            >
              <i className="nf nf-fa-chevron_left" />
            </button>

            {/* Image Display */}
            <img 
                src={imageUrls[currentImageIndex]} 
                alt={`${title || 'Project'} screenshot ${currentImageIndex + 1}`}
                className="carousel-image"
            />
            
            {/* Right Chevron Button */}
            <button 
                className="carousel-button next"
                onClick={goToNext}
                aria-label="Next image"
            >
              <i className="nf nf-fa-chevron_right" />
            </button>

            {/* Indicators with Click Functionality */}
            <div className="carousel-indicators">
                {imageUrls.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)} // <-- New click handler
                        aria-label={`Go to image ${index + 1}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
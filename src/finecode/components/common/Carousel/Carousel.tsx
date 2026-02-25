// components/Carousel/Carousel.tsx

import React, { useState, useEffect } from 'react';
import './Carousel.css'

interface CarouselProps {
    imageUrls: string[];
    title?: string; // Optional title prop for display
  }
  
  const Carousel: React.FC<CarouselProps> = ({ imageUrls, title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
  
    // Cycle through images every second
    useEffect(() => {
      if (!isPaused && imageUrls.length > 0) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % imageUrls.length
          );
        }, 3000);
  
        return () => clearInterval(interval);
      }
    }, [isPaused, imageUrls.length]);
  
    // Handle mouse enter to pause
    const handleMouseEnter = () => {
      setIsPaused(true);
    };
  
    // Handle mouse leave to resume
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
        <img 
          src={imageUrls[currentImageIndex]} 
          alt={`${title || 'Project'} screenshot ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <div className="carousel-indicators">
          {imageUrls.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;
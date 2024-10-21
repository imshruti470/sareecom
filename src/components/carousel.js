import React, { useState, useEffect } from 'react';
import '../styles/carousel.css'; // Import CSS for styling the carousel

const Carousel = () => {
  const images = [
    'https://via.placeholder.com/800x300/FF5733',
    'https://via.placeholder.com/800x300/33C4FF',
    'https://via.placeholder.com/800x300/FF33A1'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 1500; // Time interval in milliseconds

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // useEffect to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(goToNextSlide, intervalTime);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

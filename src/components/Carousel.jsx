import React, { useEffect, useState } from 'react';
import photo from '../assets/photo.avif';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://media.istockphoto.com/id/1314911697/vector/world-line-art.jpg?s=612x612&w=0&k=20&c=AieFI8JB8O3Do9qnFg5xt9x836SGa4-Z_OJOROVhmXk='
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container" style={{ width: '90%', margin: '0 auto' }}>
      <div
        className="carousel"
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item" style={{ minWidth: '100%' }}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '30%' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

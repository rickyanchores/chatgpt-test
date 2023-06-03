import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="prev-button" onClick={goToPreviousSlide}>
        Previous
      </button>
      <img className="slide-image" src={images[currentIndex]} alt="Slider" />
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;

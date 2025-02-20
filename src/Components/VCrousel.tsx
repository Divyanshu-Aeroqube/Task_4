import  { useState, useEffect } from 'react';
import image1 from "../assets/gallery-1.png";
import image2 from "../assets/gallery-2.png";
import image3 from "../assets/gallery-3.png";
import image4 from "../assets/gallery-4.png";
import image5 from "../assets/gallery-5.png";
import image6 from "../assets/gallery-6.png";

const images = [image1, image2, image3, image4, image5, image6];

const VCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Image Display */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          className="block w-full h-full object-contain"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>


      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
        onClick={goToPrevious}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
        onClick={goToNext}
      >
        ❯
      </button>
    </div>
  );
};

export default VCarousel;

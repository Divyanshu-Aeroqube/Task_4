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
    }, 3000);

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
          className="block w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>


<button
  className="absolute top-1/2 left-[1rem] transform -translate-y-1/2 z-30 p-2 transition-all hover:scale-110"
  onClick={goToPrevious}
>
  <svg className="w-[3rem] h-[3rem] text-white opacity-90 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M16 4l-8 8 8 8"/>
  </svg>
</button>

<button
  className="absolute top-1/2 right-[1rem] transform -translate-y-1/2 z-30 p-2 transition-all hover:scale-110"
  onClick={goToNext}
>
  <svg className="w-[3rem] h-[3rem] text-white opacity-90 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M8 4l8 8-8 8"/>
  </svg>
</button>

    </div>
  );
};

export default VCarousel;

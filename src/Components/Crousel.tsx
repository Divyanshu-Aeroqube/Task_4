import  { useState } from 'react';
import Image1 from "../assets/banner-1.png";
import Image2 from '../assets/banner-2.png';
import Image3 from '../assets/banner-3.png';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [Image1, Image2, Image3];

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-4/5 mx-auto">
            {/* Image Container with LOWER HEIGHT */}
            <div className="relative h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[22rem] overflow-hidden rounded-lg">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute block w-full h-full object-cover transition-opacity duration-700 ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Indicator Dots */}
            <div className="absolute z-30 flex space-x-2 bottom-[1.25rem] left-1/2 -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-[0.75rem] h-[0.75rem] rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-white w-[1rem] h-[1rem]' : 'bg-gray-400'
                        }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute top-1/2 left-[1rem] transform -translate-y-1/2 z-30 p-[0.625rem] bg-gray-800/50 hover:bg-gray-800/80 rounded-full transition-all"
                onClick={prevSlide}
            >
                <svg className="w-[1.5rem] h-[1.5rem] text-white" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 1L1 5l4 4"/>
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-[1rem] transform -translate-y-1/2 z-30 p-[0.625rem] bg-gray-800/50 hover:bg-gray-800/80 rounded-full transition-all"
                onClick={nextSlide}
            >
                <svg className="w-[1.5rem] h-[1.5rem] text-white" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 9l4-4-4-4"/>
                </svg>
            </button>
        </div>
    );
};

export default Carousel;

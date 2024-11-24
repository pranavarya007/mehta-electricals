"use client";
import { useState, useEffect } from "react";

const DottedImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);

  // Function to go to the previous slide
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Image Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: "blur(2px)" }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-50"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg z-50"
      >
        &#10095;
      </button>
    </div>
  );
};

export default DottedImageCarousel;


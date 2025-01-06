import { useState, useEffect } from "react";

import imageOne from "/images/sliderImage/slider_one.png";
import imageTwo from "/images/sliderImage/slider_two.png";
import imageThree from "/images/sliderImage/slider_three.png";
import imageFour from "/images/sliderImage/slider_four.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SliderAuto() {
  const slides = [imageOne, imageTwo, imageThree, imageFour];
  const [currentSlide, setCurrentSlide] = useState(0);

  //   Reuse to next indeed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle previous slide
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      {/* Slider */}
      <div className="relative w-full h-[40rem] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute border-gray-400 border py-20 px-5 top-28 left-0 transform -translate-y-1/2 text-white rounded-r-md opacity-75 hover:opacity-100 transition"
        >
          <FaChevronLeft className="h-10 w-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute border-gray-400 border py-20 px-5 top-28 right-0 transform -translate-y-1/2 text-white rounded-s-md opacity-75 hover:opacity-100 transition"
        >
          <FaChevronRight className="h-10 w-5" />
        </button>
      </div>
    </div>
  );
}

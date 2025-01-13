import { useState, useEffect } from "react";

import SliderControls from "./Controls";
import SliderContent from "./SiderContent";
import SliderDots from "./ButtonDots";
export default function SliderAuto({ slides, customClass, intervalTime }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides
  // console.log(currentSlide);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [slides.length, intervalTime]);

  // Handle dot click to jump to a specific slide
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

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
    <div className="relative w-full overflow-hidden">
      {/* Slider Content */}
      <SliderContent
        slides={slides}
        currentSlide={currentSlide}
        customClass={customClass}
      />

      {/* Centered Slider Controls */}
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <SliderControls onPrev={handlePrev} onNext={handleNext} />
      </div>

      {/* Dots for Slide Control */}
      <SliderDots
        slides={slides}
        currentSlide={currentSlide}
        onDotClick={handleDotClick}
      />
    </div>
  );
}

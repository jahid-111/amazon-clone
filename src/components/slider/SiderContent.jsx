export default function SliderContent({ slides, currentSlide, customClass }) {
  return (
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
          className={customClass}
        />
      ))}
    </div>
  );
}

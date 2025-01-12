export default function SliderDots({ slides, currentSlide, onDotClick }) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full ${
            currentSlide === index
              ? "bg-gray-800"
              : "bg-gray-400 hover:bg-gray-600"
          }`}
        ></button>
      ))}
    </div>
  );
}

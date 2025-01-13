import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SliderControls({ onPrev, onNext }) {
  return (
    <>
      {/* Left Button */}
      <button
        onClick={onPrev}
        className="pointer-events-auto bg-transparent hover:bg-gray-800 text-white rounded-e-sm h-28 w-auto px-2 opacity-75 hover:opacity-100 transition"
      >
        <FaChevronLeft className="h-6 w-6" />
      </button>

      {/* Right Button */}
      <button
        onClick={onNext}
        className="pointer-events-auto bg-transparent hover:bg-gray-800 text-white rounded-s-sm h-28 w-auto px-2 opacity-75 hover:opacity-100 transition"
      >
        <FaChevronRight className="h-6 w-6" />
      </button>
    </>
  );
}

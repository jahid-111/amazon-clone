// components/ScrollButton.js
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ScrollButton = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 hover:bg-neutral-400 hover:z-30 rounded-full bg-white"
    >
      {direction === "left" ? (
        <FaChevronLeft className="h-8 w-8 text-gray-700" />
      ) : (
        <FaChevronRight className="h-8 w-8 text-gray-700" />
      )}
    </button>
  );
};

export default ScrollButton;

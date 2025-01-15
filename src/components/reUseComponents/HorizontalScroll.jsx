import { useRef } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const HorizontalScroll = ({ containerStyles, children }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center justify-center px-10 group">
      {/* Scroll Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 py-6 rounded-e-md border bg-gray-500  blur-[1px] hover:blur-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <MdOutlineChevronLeft className="h-8 w-8 text-white" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto ${containerStyles}`}
      >
        {children}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 py-6 rounded-s-md border bg-gray-500  blur-[1px] hover:blur-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <MdOutlineChevronRight className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export default HorizontalScroll;

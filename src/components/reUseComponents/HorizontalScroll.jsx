import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HorizontalScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  function handleScrollX_Card(direction) {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = 600; // Adjust scroll speed (higher = faster)
      const scrollSpeed = 20; // Speed of the scroll transition (lower = faster)

      const scroll = (start, end) => {
        const distance = end - start;
        const step = distance / scrollSpeed;

        let currentPosition = start;
        const scrollInterval = setInterval(() => {
          currentPosition += step;
          container.scrollLeft = currentPosition;

          if (
            (step > 0 && currentPosition >= end) ||
            (step < 0 && currentPosition <= end)
          ) {
            clearInterval(scrollInterval);
            container.scrollLeft = end; // To make sure we end exactly at the target position
          }
        }, 10);
      };

      if (direction === "left") {
        scroll(container.scrollLeft, container.scrollLeft - scrollAmount);
      } else if (direction === "right") {
        scroll(container.scrollLeft, container.scrollLeft + scrollAmount);
      }
    }
  }

  return (
    <div className="relative bg-red-400">
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => handleScrollX_Card("left")}
          className="px-3 py-2 hover:bg-gray-300 pointer-events-auto"
        >
          <FaChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={() => handleScrollX_Card("right")}
          className="px-3 py-2 hover:bg-gray-300 pointer-events-auto"
        >
          <FaChevronRight className="h-8 w-8" />
        </button>
      </div>
      <div
        className="border p-1 border-red-700 overflow-x-auto my-5"
        ref={scrollContainerRef}
      >
        <div className="flex justify-start items-center gap-3 w-max">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

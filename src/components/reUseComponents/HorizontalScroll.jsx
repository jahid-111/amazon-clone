import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HorizontalScroll = ({ children }) => {
  const scrollContainerRef = useRef(null);

  function handleScrollX_Card(direction) {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = 400; // Adjust scroll speed (higher = faster)
      const scrollSpeed = 250; // Speed of the scroll transition (lower = faster)

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
    <div className="relative p-1 ">
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => handleScrollX_Card("left")}
          className="px-3 py-2 pointer-events-auto blur-[1px] hover:blur-0 hover:text-gray-300 hover:border-r "
        >
          <FaChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={() => handleScrollX_Card("right")}
          className="px-3 py-2 pointer-events-auto blur-[1px] hover:blur-0 hover:text-gray-300 hover:border-l "
        >
          <FaChevronRight className="h-8 w-8" />
        </button>
      </div>
      <div className="overflow-x-auto pb-5" ref={scrollContainerRef}>
        <div className="flex justify-start items-center gap-3 w-max">
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;

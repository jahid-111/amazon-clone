import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HorizontalScroll = ({
  children,
  scrollAmount = 400,
  scrollDuration = 250,
}) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;

    if (container) {
      const start = container.scrollLeft;
      const end =
        direction === "left" ? start - scrollAmount : start + scrollAmount;

      let startTime;

      const smoothScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const progress = Math.min(elapsed / scrollDuration, 1);
        const easedProgress =
          progress < 0.5 ? 2 * progress ** 2 : 1 - (-2 * progress + 2) ** 2 / 2; // Ease-in-out cubic

        container.scrollLeft = start + easedProgress * (end - start);

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <div className="relative p-1">
      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button
          onClick={() => handleScroll("left")}
          className="h-20 w-8 px-2 pointer-events-auto text-gray-50 hover:bg-slate-800 border-e rounded-e-md"
        >
          <FaChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="h-20 w-8 px-2 pointer-events-auto text-gray-50 hover:bg-slate-800 border-s rounded-s-md"
        >
          <FaChevronRight className="h-4 w-4" />
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

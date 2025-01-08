// components/HorizontalScroll.js
import { useRef } from "react";
import ScrollButton from "./ScrollButton";
import ScrollContainer from "./ScrollContainer";

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
    <div className="relative w-full xl:w-10/12 mx-0 lg:mx-24 px-2 lg:px-0">
      <div className="absolute left-0 right-0 flex justify-between items-center">
        <ScrollButton
          direction="left"
          onClick={() => handleScrollX_Card("left")}
        />
        <ScrollButton
          direction="right"
          onClick={() => handleScrollX_Card("right")}
        />
      </div>

      {/* Scroll Container with children */}
      <ScrollContainer ref={scrollContainerRef}>{children}</ScrollContainer>
    </div>
  );
};

export default HorizontalScroll;
    
import { useRef } from "react";

function useSmoothScroll() {
  const scrollContainerRef = useRef(null);

  function handleScrollX_Card(direction) {
    const container = scrollContainerRef.current;

    if (container) {
      const scrollAmount = 600; // Adjust scroll distance
      const scrollSpeed = 300; // Transition speed in milliseconds

      // Apply smooth scrolling transition
      container.style.transition = `scroll-left ${scrollSpeed}ms ease-in-out`;

      // Scroll left or right
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  }

  return { scrollContainerRef, handleScrollX_Card };
}

export default useSmoothScroll;

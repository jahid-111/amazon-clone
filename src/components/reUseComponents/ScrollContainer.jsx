// components/ScrollContainer.js
import { forwardRef } from "react";

const ScrollContainer = forwardRef(({ children }, ref) => {
  return (
    <div className="border p-1 border-red-700 overflow-x-auto my-5" ref={ref}>
      <div className="flex justify-start items-center gap-3 w-max">
        {children}
      </div>
    </div>
  );
});

export default ScrollContainer;

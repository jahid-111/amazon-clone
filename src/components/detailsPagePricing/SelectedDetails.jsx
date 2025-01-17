import { useState } from "react";

export default function SelectedDetails({ photo }) {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    // console.log(rect);
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setZoomPosition({ ...zoomPosition, show: false });
  };

  return (
    <div className="">
      {/* Main Image */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer relative"
      >
        <img
          src={photo}
          alt="Main Photo"
          className=" mx-auto  px-10 h-[80vh]"
        />
      </div>
      {/* Image Zoon Viewer */}
      <div className="overflow-hidden h-full w-full p-14 z-50">
        {zoomPosition.show && (
          <div className="absolute overflow-hidden right-10 top-28 h-[30rem] w-[30rem] xl:h-[50rem] xl:w-[50rem] z-50 rounded-md border-gray-800 border-dotted  border-2 shadow-2xl">
            <div className="bg-[#fffdfd] h-full w-full flex items-center justify-center overflow-hidden rounded-md">
              <div>
                <img
                  src={photo}
                  alt="Zoomed Photo"
                  className="absolute z-50 mx-auto "
                  style={{
                    transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%) scale(1.4)`,
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    width: "200%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

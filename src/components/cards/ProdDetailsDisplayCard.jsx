import { Link } from "react-router-dom";

export default function ProdDetailsDisplayCard() {
  return (
    <div className="">
      <div className="h-40  flex justify-center items-center bg-gray-100 rounded-sm">
        <img
          src="/images/sliderImage/slider_one.png"
          alt="Product Image"
          className=" w-full h-full p-4"
        />
      </div>

      <div className="flex flex-row justify-between items-center gap-2 ">
        {/* Discount Badge */}
        <div className=" bg-red-700 flex items-center justify-center h-8 w-auto ">
          <p className="text-white text-xs font-bold p-1">40% Off</p>
        </div>
        {/* Limited Offer Text */}
        <div className="">
          <p className="text-red-700 text-xs font-semibold">
            Limited Time Deal
          </p>
        </div>
      </div>

      <div>
        <Link
          to={"/"}
          className=" text-firstClass text-[.8rem] font-semibold hover:text-orange-600 -leading-[10px]	"
        >
          <p>Product name click to Details Page </p>
        </Link>
      </div>
      <div className=" my-2 flex space-x-2">
        {/* Color Indicators (Dots) */}
        <div className="h-4 w-4 rounded-full bg-red-400 border-2 border-white"></div>
        <div className="h-4 w-4 rounded-full bg-green-400 border-2 border-white"></div>
        <div className="h-4 w-4 rounded-full bg-blue border-2 border-white"></div>
        <div className="h-4 w-4 rounded-full bg-yellow border-2 border-white"></div>
      </div>
    </div>
  );
}

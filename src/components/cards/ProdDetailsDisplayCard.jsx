import { Link } from "react-router-dom";

export default function ProdDetailsDisplayCard() {
  return (
    <div className=" cursor-pointer">
      <div className="h-40  flex justify-center items-center bg-gray-100 rounded-sm">
        <img
          src="https://shakersa.com/wp-content/uploads/MFTN20A.png"
          alt="Product Image"
          className=" w-full h-full p-4"
        />
      </div>

      <div className="flex flex-row justify-between items-center gap-2 mt-1 ">
        {/* Discount Badge */}
        <div className=" bg-red-700 flex items-center justify-center w-auto ">
          <p className="text-white text-xs font-bold p-1">40% Off</p>
        </div>
        {/* Limited Offer Text */}

        <p className="text-red-700 text-xs font-semibold">Limited Time Deal</p>
      </div>

      <div>
        <Link
          to={"/"}
          className=" text-gray-700 text-[.8rem] font-semibold hover:text-orange-600 -leading-[10px]	"
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

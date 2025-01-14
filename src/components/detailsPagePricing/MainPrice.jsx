import { FaInfo } from "react-icons/fa";

export default function MainPrice() {
  return (
    <>
      {/* Discount and Main Price */}
      <div className="flex gap-4 pt-2 items-baseline">
        <h4 className="text-orange-700 text-2xl font-semibold">- 7%</h4>
        <div className="font-semibold">
          <div className="flex items-baseline">
            <sup className="text-sm">SAR</sup>
            <h4 className="text-3xl text-black mx-1">5,299</h4>
            <sup className="text-sm">00</sup>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className=" text-xs font-semibold">
        <p className="flex items-center mt-2 text-gray-700">
          List Price:
          <span className="line-through ml-1 text-gray-500">SAR5,699.00</span>
          <FaInfo className="ml-2 border border-gray-400 rounded-full text-xs p-0.5" />
        </p>
        <p className="text-gray-600">All prices include VAT. Size: 256 GB</p>
      </div>
    </>
  );
}

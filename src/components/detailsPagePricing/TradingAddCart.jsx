import { Link } from "react-router-dom";

export default function TradingAddCart({ title, children, isActive, onShow }) {
  return (
    <div
      className={`${
        !isActive ? "bg-gray-100 hover:bg-slate-200" : "bg-white"
      } border-b p-2 cursor-pointer`}
    >
      <div onClick={onShow}>
        <div className="flex justify-between items-center">
          <h6 className="font-semibold text-sm">With Trade-in</h6>
          <input type="radio" checked={isActive} onChange={() => {}} />
        </div>
        <p
          className={`${
            isActive
              ? "text-start text-sm font-bold text-red-800"
              : "text-start font-medium text-red-800"
          }`}
        >
          Save up to SAR 1,760.00
        </p>
        <p className="mt-5 text-xs font-medium">
          Get an instant discount with Trade-In
        </p>
      </div>

      {isActive && (
        <div className="mt-3">
          {/* Quantity Selector */}
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <select
                name="quantity"
                id="quantity"
                className="w-full border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>

            {/* Link to "How does Trade-in work?" */}
            <Link className="text-blue text-sm hover:text-gray-900 underline">
              How does Trade-in work?
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

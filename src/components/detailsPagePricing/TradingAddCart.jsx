import { Link } from "react-router-dom";

export default function TradingAddCart({ title, children, isActive, onShow }) {
  // console.log(title, children, isActive, onShow);
  return (
    <div className=" border-b p-2 cursor-pointer">
      <div onClick={onShow} className="px-2">
        <div className=" flex justify-between items-center ">
          <h6 className="font-semibold text-sm">With Trade-in</h6>
          <input type="radio" />
        </div>
        <p className="text-start text-sm font-medium text-red-800">
          Save upto SAR 1,760.00
        </p>
        <p className=" mt-5 text-xs font-medium">
          Get Instant discount with Trade-In
        </p>
      </div>
      {isActive && (
        <div className="">
          {/* DELIVERY TERMS */}

          {/* DELIVERY LOCATION */}

          <div className="mt-3">
            <div className="flex flex-col gap-2 mt-3">
              {/* QUANTITY PROD */}
              <div className="w-full">
                <select
                  name="quantity"
                  id="quantity"
                  className="w-full border  border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <Link className="text-blue text-sm hover:text-gray-900 underline ">
                How does Trade-in work?
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

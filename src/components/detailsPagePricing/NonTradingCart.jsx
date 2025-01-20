import { prodShipping } from "../../../utils/phoneStaticData";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import CartAdd from "../reUseComponents/CartAdd";

export default function NonTradingCart({ title, children, isActive, onShow }) {
  // console.log(title, children, isActive, onShow);
  return (
    <div
      className={`${
        !isActive && " hover:bg-slate-200"
      } border-b p-2 cursor-pointer`}
    >
      <div onClick={onShow}>
        <div className=" flex justify-between items-center">
          <h6 className="font-semibold text-sm">Without Trade-in</h6>
          <input
            type="radio"
            checked={isActive} // Fill (check) the radio button if isActive is true
            onChange={onShow} // Toggle the state when clicked
            className="border-gray-400" // Custom styling for the radio
          />
        </div>

        <p
          className={`${
            isActive
              ? "text-start text-sm font-bold text-red-800"
              : "text-start font-medium text-red-800"
          }`}
        >
          <span className="text-red-800">SAR 1974.00</span>
          <span className="deprecated-style">SAR 2,599.00</span>
        </p>
      </div>
      {isActive && (
        <div className="">
          {/* DELIVERY TERMS */}
          <button className="mt-2">
            <div className=" flex items-center ">
              <p className=" text-blue text-sm hover:text-gray-900">
                FREE Returns
              </p>
              <IoIosArrowDown />
            </div>
          </button>
          <div className="">
            <p>
              <Link className="text-blue text-sm hover:text-gray-900 underline ">
                FREE delivery
              </Link>
              .
              <span className=" font-bold text-sm">
                Wednesday, 15 <br />
                January
              </span>
            </p>
            <p className=" mt-1 text-sm">
              <span className=" font-medium"> Or fastest delivery</span>{" "}
              <span className=" font-bold">
                Tomorrow, 14 <br /> January.
              </span>{" "}
              <span className=" font-medium">Order within </span>
              <span className=" text-green-700">1 hr 38 mins</span>
            </p>
          </div>
          {/* DELIVERY LOCATION */}
          <div className=" flex items-center gap-2">
            <IoLocationOutline className="h-4 w-4" />
            <p className=" text-xs text-blue">
              Delivering to Riyadh - Update location
            </p>
          </div>
          <div className="mt-3">
            <h4 className=" text-xl font-medium text-green-700">In Stock</h4>

            <div className="flex flex-col gap-2 mt-3">
              {/* QUANTITY PROD */}
              <div className="w-full">
                <select
                  name="quantity"
                  id="quantity"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              {/* Add to Cart Button - Orange */}
              <CartAdd />

              {/* Add to Cart Button - Yellow */}
              <button className="bg-[#f89f3a] text-gray-800 font-medium rounded-full py-2 text-xs px-10 hover:bg-yellow-500 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            {prodShipping.map((specific) => (
              <div
                key={specific.label}
                className="flex items-center gap-10 text-xs"
              >
                <div className="w-20 h-auto inline-block text-start">
                  <p> {specific.label}</p>
                </div>
                <div className="flex-grow ">
                  <p className=" font-medium">{specific.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

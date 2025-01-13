import { FaInfo, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  aboutDetailsProduct,
  prodShipping,
  specifications,
} from "../../../utils/phoneStaticData";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function ProductDetailsPage() {
  return (
    <div>
      <div className=" flex justify-between px-28">
        {/* PHOTO INTRODUCE */}
        <div className=" border flex">
          {/* MULTI PHOTO DISPLAY */}
          <div className=" w-40 border h-screen bg-green-300">
            <div>
              {[...Array(5)].map((_, i) => {
                // Generate a random color in RGB format
                const randomColor = `rgb(${Math.floor(
                  Math.random() * 9999
                )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                  Math.random() * 256
                )})`;

                return (
                  <div key={i} className="flex gap-4">
                    <button
                      style={{ backgroundColor: randomColor }}
                      className="h-12 w-12"
                    >
                      prod
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          {/* SELECTED PHOTO */}
          <div className="p-16 ">
            <img
              src="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_SL1500_.jpg"
              alt=""
              className=" "
            />
          </div>
        </div>

        {/* DETAILS AND ORDER CART */}
        <div className="border flex p-2">
          {/* HEADING */}
          <div className="">
            <div className="pb-2 border-b">
              {/* Product Title */}
              <h1 className="text-2xl font-bold">
                Apple iPhone 16 Pro Max (256 GB) - Black Titanium
              </h1>

              {/* Brand Link */}
              <p className="mt-2">
                <Link to="/" className="text-blue hover:underline text-sm">
                  Visit the Apple Store
                </Link>
              </p>

              {/* Rating and Navigation */}
              <div className="flex justify-between items-center mt-3">
                {/* Rating Section */}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                  <span className="text-sm text-gray-600">(4.5)</span>
                </div>

                {/* Separator and Search Link */}
                <span className="text-gray-400 mx-2">|</span>
                <Link
                  to="/search"
                  className="text-blue hover:underline text-sm"
                >
                  Search Page
                </Link>
              </div>

              {/* Purchase Info */}
              <p className="mt-3 text-sm text-gray-500">
                400+ bought in past month
              </p>
            </div>

            {/* PRICE */}

            <div className=" flex gap-4 pt-2">
              <h4 className=" text-orange-500 text-2xl"> - 7%</h4>
              <h2 className=" text-4xl font-semibold">
                <sup>SAR</sup> 5,299<sup>00</sup>
              </h2>
            </div>

            <div className="pt-2">
              <p className=" mt-2">
                List Price: SAR5,699.00
                <FaInfo className=" inline-block  border rounded-full text-xs" />
              </p>
              <p>All prices include VAT. Size: 256 GB</p>

              <div className="flex gap-3 mt-2">
                <button className=" border px-2  py-1 rounded-lg">1TB</button>
                <button className=" border px-2  py-1 rounded-lg">256GB</button>
                <button className=" border px-2  py-1 rounded-lg">512TB</button>
              </div>
            </div>

            {/* COLOR */}
            <div className=" flex justify-start items-center gap-2 mt-2">
              <div className=" h-8 w-8 bg-green-400 rounded-full border"></div>
              <div className=" h-8 w-8 bg-gray-400 rounded-full border"></div>
              <div className=" h-8 w-8 bg-white rounded-full border"></div>
              <div className=" h-8 w-8 bg-black rounded-full border"></div>
            </div>

            <div>
              <p>size 128</p>
              <p>Style Iphone</p>
            </div>

            {/* Specification */}
            <div className="flex flex-col gap-1 mt-5">
              {specifications.map((specific) => (
                <div key={specific.label} className="flex items-center gap-5">
                  <div className="w-40 h-auto inline-block text-start">
                    <strong>{specific.label}</strong>
                  </div>
                  <div className="flex-grow p-2">
                    <h6>{specific.value}</h6>
                  </div>
                </div>
              ))}
            </div>

            <div className=" mt-5">
              {/* ABOUT ITEMS */}
              <div>
                <ul className="flex flex-col w-[30rem] list-disc pl-5">
                  {aboutDetailsProduct.map((details, index) => (
                    <li key={index} className="list-item text-sm font-medium">
                      {details}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* SELLER */}
            <div>
              <img
                className=" w-96 h-30"
                src="https://m.media-amazon.com/images/G/40/Apple/River/AuthorizedReseller_Black_EN_800x190_ME._CB572981095_.jpg"
                alt="apple"
              />
            </div>
          </div>

          {/* PRICING */}
          <div className="w-72 h-screen border-2 m-2 rounded-md">
            <div className="rounded-md ">
              {/* TRADING */}
              <div className="hover:bg-gray-300 border-b pb-2">
                <div className=" px-2">
                  <div className=" flex justify-between items-center ">
                    <h6 className="font-bold">With Trade-in</h6>
                    <input type="radio" />
                  </div>
                  <p className="text-start text-sm font-bold text-orange-600">
                    Save upto SAR 1,760.00
                  </p>
                  <p className=" mt-5 text-xs font-medium">
                    Get Instant discount with Trade-In
                  </p>
                </div>
              </div>
              {/*NON TRADING */}
              <div className="hover:bg-gray-300 pt-2">
                <div className="px-2">
                  <div>
                    <div className=" flex justify-between items-center font-semibold">
                      <p>Without Trade-in</p>
                      <input type="radio" className="" />
                    </div>

                    <p className="text-start text-sm font-bold">
                      <span className="text-orange-600">SAR 1974.00</span>{" "}
                      <span className="deprecated-style">SAR 2,599.00</span>
                    </p>

                    <button className="mt-3">
                      <div className=" flex items-center">
                        <p className=" text-blue text-sm">FREE Returns</p>
                        <IoIosArrowDown />
                      </div>
                    </button>
                    <div className="my-3">
                      <p>
                        <Link className=" text-blue underline text-sm">
                          FREE delivery
                        </Link>
                        .
                        <span className=" font-bold text-sm">
                          Wednesday, 15 <br />
                          January
                        </span>
                      </p>
                      <p className=" mt-3 text-sm">
                        <span className=" font-medium">
                          {" "}
                          Or fastest delivery
                        </span>{" "}
                        <span className=" font-bold">
                          Tomorrow, 14 <br /> January.
                        </span>{" "}
                        <span className=" font-medium">Order within </span>
                        <span className=" text-green-700">1 hr 38 mins</span>
                      </p>
                    </div>
                    <div className=" flex items-center gap-2">
                      <IoLocationOutline className="h-4 w-4" />
                      <p className=" text-xs text-blue">
                        Delivering to Riyadh - Update location
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className=" text-xl font-medium text-green-700">
                      In Stock
                    </h4>

                    <div className="flex flex-col gap-2 mt-3">
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
                      <button className="bg-orange-400 text-gray-800 font-medium rounded-full py-2 text-xs px-10 transition-colors">
                        Add To Cart
                      </button>

                      {/* Add to Cart Button - Yellow */}
                      <button className="bg-orange-500 text-gray-800 font-medium rounded-full py-2 text-xs px-10 hover:bg-yellow-500 transition-colors">
                        Add To Cart
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH SECTION */}
    </div>
  );
}

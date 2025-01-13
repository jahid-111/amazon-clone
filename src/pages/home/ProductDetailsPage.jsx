import { FaInfo, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" border">
          <img
            src="/electricPage/detailsProd/mobile/apple.png"
            alt=""
            className=" h-96"
          />
        </div>

        <div className=" border">
          <div className=" border-b">
            <h1>Apple iPhone 16 Pro Max (256 GB) - Black Titanium</h1>
            <Link to={"/"}>Visit the Apple Store</Link>
            <div className=" flex justify-around items-center">
              <div className=" flex">
                {[...Array(5)].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
              <p>Ratting</p> |<Link to={"/"}> Search Page</Link>
            </div>
            <p>400+ bought in past month</p>
          </div>

          <div className=" flex gap-4">
            <h4 className=" text-orange-500 text-2xl"> - 7%</h4>
            <h2 className=" text-4xl font-semibold">
              <sup>SAR</sup> 5,299<sup>00</sup>
            </h2>
          </div>

          <div>
            <p className="">
              List Price: SAR5,699.00{" "}
              <FaInfo className=" inline-block  border rounded-full text-xs" />
            </p>
            <p>All prices include VAT. Size: 256 GB</p>

            <div className="flex gap-3">
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
        </div>
      </div>
    </div>
  );
}

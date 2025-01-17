import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PriceHeading({ product }) {
  // console.log(product);
  return (
    <div className="pb-2 border-b">
      {/* Product Title */}
      <h1 className="text-2xl font-semibold">{product?.name}</h1>

      {/* Brand Link */}
      <p className="">
        <Link to="/" className="text-blue hover:underline text-sm font-medium">
          Visit the Apple Store
        </Link>
      </p>

      {/* Rating and Navigation */}
      {/* NEED DEV */}
      <div className="flex justify-between items-center mt-3">
        {/* Rating Section */}
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
          <span className="text-sm text-gray-600">({product?.rating})</span>
        </div>

        {/* Separator and Search Link */}
        <span className="text-gray-400 mx-2">|</span>
        <Link to="/search" className="text-blue hover:underline text-sm">
          Search Page
        </Link>
      </div>

      {/* Purchase Info */}
      <p className="mt-3 text-sm text-gray-500">400+ bought in past month</p>
    </div>
  );
}

import { Link } from "react-router-dom";
import RatingsPrice from "../reUseComponents/RatingsPrice";

export default function DetailsPriceCard({ customClass, isBestSeller }) {
  return (
    <div>
      {/* Product Image */}
      <Link to="/">
        <img
          className={customClass}
          src="/images/sliderImage/slider_three.png"
          alt="Product Image"
        />
      </Link>

      {/* Product Name */}
      <Link className="text-blue hover:underline">
        <h6>Product name go here</h6>
      </Link>

      {/* Ratings and Price Component */}
      <RatingsPrice />

      {/* Polygon Badge */}
      {isBestSeller && (
        <div className="absolute -top-3 w-32">
          <div
            aria-label="Best Seller"
            style={{
              clipPath:
                "polygon(0% 20%, 100% 20%, 60% 80%, 100% 80%, 60% 80%, 60% 80%, 0% 80%)",
            }}
            className="flex bg-orange-700 p-5"
          >
            <p className="text-white text-start text-sm font-semibold">
              Best Seller
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

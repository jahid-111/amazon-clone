import { Link } from "react-router-dom";
import RatingsPrice from "../reUseComponents/RatingsPrice";
import PhotoOptimize from "../reUseComponents/images/PhotoOptimize";

export default function DetailsPriceCard({
  customClass,
  isBestSeller,
  productInfo,
}) {
  // console.log(productInfo?.marketing);
  return (
    <div>
      {/* Product Image */}
      <PhotoOptimize
        photo={productInfo?.photos[0]?.mainPhoto}
        customClass={customClass}
      />
      {/* Product Name */}
      <Link className="text-blue hover:underline">
        <h6>{productInfo?.name}</h6>
      </Link>

      {/* Ratings and Price Component */}
      <RatingsPrice product={productInfo} />

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

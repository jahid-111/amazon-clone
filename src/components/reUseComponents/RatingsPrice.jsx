import StarCountRating from "./StarCountRating";

export default function RatingsPrice({ product }) {
  // console.log(product); // Debugging output

  return (
    <div className="space-y-2">
      {/* Product Brand */}
      <p className="text-sm font-medium text-gray-700">
        {product?.brand || "Unknown Brand"}
      </p>

      {/* Star Rating */}
      <StarCountRating rating={product?.rating} />

      {/* Price */}
      <h5 className="text-lg font-bold">
        <sup className="text-xs text-gray-600">SAR</sup>
        <strong>{product?.price?.current || "N/A"}</strong>
      </h5>

      {/* Marketing Info */}
      <p className="text-xs font-medium text-gray-500">
        {product?.marketing?.[4]?.viewIn || "No additional info"}
      </p>
    </div>
  );
}

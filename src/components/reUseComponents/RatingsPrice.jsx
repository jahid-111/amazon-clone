import { Link } from "react-router-dom";

export default function RatingsPrice({ product }) {
  // console.log(product);
  return (
    <div>
      <p>{product?.brand}</p>
      <Link to={"/"}>⭐️⭐️⭐️⭐️⭐️</Link>
      <h5 className="">
        <sup className="text-xs">SAR</sup>
        <strong>{product?.price?.current}</strong>
      </h5>
      <p className=" text-xs font-medium">{product.marketing[4].viewIn}</p>
    </div>
  );
}

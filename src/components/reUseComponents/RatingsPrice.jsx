import { Link } from "react-router-dom";

export default function RatingsPrice({ product }) {
  console.log(product);
  return (
    <div>
      <p>brand</p>
      <Link to={"/"}>⭐️⭐️⭐️⭐️⭐️</Link>
      <h5 className="">
        <sup className="text-xs">SAR</sup>
        <strong>{product?.price}</strong>
      </h5>
      <p className=" text-xs font-medium">100+ viewed last time</p>
    </div>
  );
}

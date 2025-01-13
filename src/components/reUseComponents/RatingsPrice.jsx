import { Link } from "react-router-dom";

export default function RatingsPrice() {
  return (
    <div>
      <p>brand</p>
      <Link to={"/"}>⭐️⭐️⭐️⭐️⭐️</Link>
      <h5 className="text-xl font-semibold">
        <sup>SAR</sup> 233
      </h5>
      <p className=" text-sm font-medium">100+ viewed last time</p>
    </div>
  );
}

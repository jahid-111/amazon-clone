import { Link } from "react-router-dom";

export default function RatingsPrice() {
  return (
    <div>
      <Link to={"/"}>⭐️⭐️⭐️⭐️⭐️</Link>
      <p className=" text-sm font-medium">100+ viewed last time</p>
      <h5 className="text-xl font-semibold">
        <sup>SAR</sup> 233
      </h5>
    </div>
  );
}

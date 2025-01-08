import { Link } from "react-router-dom";
import RatingsPrice from "../reUseComponents/RatingsPrice";

export default function DetailsPriceCard() {
  return (
    <div className=" flex flex-col justify-start border w-56 p-1">
      <Link to="/">
        <img
          className=" h-56 w-56 "
          src="../../../public/images/sliderImage/slider_three.png"
          alt=""
        />
      </Link>
      <Link className=" text-blue hover:underline">
        <h6>Product name go here</h6>
      </Link>
      <RatingsPrice />
    </div>
  );
}

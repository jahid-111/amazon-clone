import { Link } from "react-router-dom";

export default function PhotoOptimize({ customClass }) {
  //   console.log(customClass);
  return (
    <Link to="product/id">
      <img
        className={customClass}
        src="/images/sliderImage/slider_three.png"
        alt="Product Image"
      />
    </Link>
  );
}

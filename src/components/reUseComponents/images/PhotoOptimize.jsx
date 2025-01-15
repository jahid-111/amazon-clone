import { Link } from "react-router-dom";

export default function PhotoOptimize({ customClass }) {
  //   console.log(customClass);
  return (
    <Link to="product/id">
      <img
        className={customClass}
        src="https://images-eu.ssl-images-amazon.com/images/I/41Q1MeSb4YL._AC_UL330_SR330,330_.jpg"
        alt="Product Image"
      />
    </Link>
  );
}

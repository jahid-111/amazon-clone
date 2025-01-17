import { Link } from "react-router-dom";

export default function PhotoOptimize({ customClass, photo }) {
  //   console.log(customClass);
  return (
    <Link to="product/id">
      <img
        className={`${customClass} hover:border border-orange-400 rounded-md`}
        src={photo}
        alt="Product Image"
      />
    </Link>
  );
}

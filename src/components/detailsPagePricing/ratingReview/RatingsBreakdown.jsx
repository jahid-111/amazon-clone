import { ratingsCurrentProduct } from "../../../../utils/staticUserData";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

export default function RatingsBreakdown() {
  return (
    <>
      {ratingsCurrentProduct.map((rating) => (
        <Link
          key={rating.stars}
          className=" text-blue text-sm font-semibold hover:underline  hover:text-gray-600"
        >
          <div className="flex justify-start items-center gap-2 my-3">
            <h6>{rating.stars} star</h6>
            <div className="rounded-sm h-5 w-8/12 border border-gray-400">
              <div
                className="bg-orange-400 h-full rounded-e-sm   mt-0"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            <h6>{rating.percentage}%</h6>
          </div>
        </Link>
      ))}
      <div className="flex items-center gap-2 pb-5 border-b">
        <FaChevronDown />
        <Link className=" text-blue hover:underline hover:text-gray-600 text-sm">
          How are ratings calculated?
        </Link>
      </div>
    </>
  );
}

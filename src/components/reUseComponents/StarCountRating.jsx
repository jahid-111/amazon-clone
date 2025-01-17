import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";

export default function StarCountRating({ rating }) {
  const renderStars = (rating) => {
    const totalStars = 5; // Maximum stars
    return Array.from({ length: totalStars }, (_, index) => {
      const starValue = index + 1;

      if (starValue <= Math.floor(rating)) {
        return <AiFillStar key={index} className="text-orange-500 text-lg" />;
      } else if (starValue - 0.5 <= rating) {
        return <MdStarHalf key={index} className="text-orange-500 text-lg" />;
      } else {
        return (
          <AiOutlineStar key={index} className=" text-orange-600 text-lg" />
        );
      }
    });
  };

  return (
    <Link to={"/"} className="flex items-center space-x-1">
      {renderStars(rating || 0)}
      <span className="text-sm text-gray-600 ml-2">{rating || "0.0"}</span>
    </Link>
  );
}

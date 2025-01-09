import { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { ratingStar } from "../../../utils/staticUserData";

export default function RatingsCategory() {
  const [selectedRating, setSelectedRating] = useState("all");

  const handleChange = (value) => {
    setSelectedRating(value);
    console.log("Selected rating:", value);
  };

  const renderStars = (count, selectedRating) => {
    const stars = [];
    for (let i = 1; i <= 4; i++) {
      stars.push(
        <span key={i}>
          {i <= count ? (
            <IoIosStar
              className={`h-5 w-5  border-primary${
                selectedRating === "all"
                  ? "bg-yellow-500"
                  : i <= selectedRating
                  ? "text-red-700"
                  : "text-yellow-500"
              }`}
            />
          ) : (
            <IoIosStarOutline className="text-yellow-500 h-5 w-5" />
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <h4 className="font-semibold mb-2">Customer Reviews</h4>
      <ul className="list-none space-y-2 border">
        <li>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value="all"
              checked={selectedRating === "all"}
              onChange={() => handleChange("all")}
              className="cursor-pointer"
            />
            <span>All</span>
          </label>
        </li>
        {ratingStar.map((option) => (
          <li key={option.id} className=" border">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                value={option.id}
                checked={selectedRating === option.id}
                onChange={() => handleChange(option.id)}
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-1">
                {renderStars(option.stars, selectedRating)}
                <span>& up</span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

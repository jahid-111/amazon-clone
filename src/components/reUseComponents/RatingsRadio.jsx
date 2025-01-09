import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

/**
 * A reusable RatingsRadio component that accepts custom ratings via props.
 * @param {Array} reviews - An array of rating options to be displayed.
 * @param {Function} onRatingChange - Callback function to handle rating changes.
 */
export default function RatingsRadio({ options, onRatingChange }) {
  const [selectedRating, setSelectedRating] = useState("");
  console.log(selectedRating);
  console.log(selectedRating);
  const handleChange = (event) => {
    const review = event.target.value;
    setSelectedRating(review);
    onRatingChange && onRatingChange(review);
  };

  return (
    <div>
      <ul className="flex justify-start items-center">
        <fieldset>
          <legend>Customer Reviews</legend>
          <div className="flex justify-start gap-1">
            <input
              type="radio"
              id="all"
              name="review"
              value="All"
              checked={selectedRating === "All"}
              onChange={handleChange}
            />
            <label className="flex justify-start items-center" htmlFor="all">
              All
            </label>
          </div>
          {options?.map((review, index) => (
            // console.log(review),
            <div className="flex justify-start gap-1" key={index}>
              <input
                type="radio"
                id={`review-${index}`}
                name="review"
                value={review.label}
                checked={selectedRating === review.label}
                onChange={handleChange}
              />
              <label
                className="flex justify-start items-center"
                htmlFor={`review-${index}`}
              >
                {/* Decrease From Start */}
                {[...Array(review.stars)].map((_, i) => (
                  <FaStar className="text-yellow h-5 w-5" key={i} />
                ))}
                {/* I */}
                {[...Array(5 - review.stars)].map((_, i) => (
                  <FaRegStar className="text-yellow h-5 w-5" key={i} />
                ))}
              </label>
            </div>
          ))}
        </fieldset>
      </ul>
    </div>
  );
}

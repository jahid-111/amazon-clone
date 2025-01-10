import { FaStar, FaRegStar } from "react-icons/fa";
import useRadioForm from "../../hooks/useRadioFrom";

export default function RatingsFilter() {
  const { value: selectedRating, onChange: handleChange } = useRadioForm();

  const options = [
    { label: "4 Stars", stars: 4 },
    { label: "3 Stars", stars: 3 },
    { label: "2 Stars", stars: 2 },
    { label: "1 Star", stars: 1 },
  ];
  // console.log(selectedRating);

  return (
    <div className="pb-2">
      <h3 className="text-[1rem] text-black font-bold">Ratings</h3>

      {/* "All" Option */}
      <label className="flex items-center">
        <input
          type="radio"
          name="review"
          id="all"
          value="All"
          checked={selectedRating === "All"}
          onChange={handleChange}
          className="cursor-pointer p-4 "
        />
        <span className="ml-2 text-gray-700">All</span>
      </label>

      {options.map((review, index) => (
        <div className="flex items-center gap-1" key={index}>
          {/* Radio Button */}
          <input
            type="radio"
            id={`review-${index}`}
            name="review"
            value={review.label}
            checked={selectedRating === review.label}
            onChange={handleChange}
            className="cursor-pointer"
          />

          {/* Stars and Label */}
          <label
            htmlFor={`review-${index}`}
            className="flex items-center cursor-pointer"
          >
            {/* Render Filled Stars */}
            {[...Array(review.stars)].map((_, i) => (
              <FaStar className="text-yellow " key={`star-${index}-${i}`} />
            ))}

            {/* Render Empty Stars */}
            {[...Array(5 - review.stars)].map((_, i) => (
              <FaRegStar className="text-yellow" key={`empty-${index}-${i}`} />
            ))}

            {/* Text Label */}
            <span className="ml-2 text-gray-700"> & Up</span>
          </label>
        </div>
      ))}
    </div>
  );
}

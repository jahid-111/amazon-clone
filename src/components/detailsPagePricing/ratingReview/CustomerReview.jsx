import customerReviews from "../../../../utils/dummyData/reviewsCustomer";
import { FaStar } from "react-icons/fa";

export default function CustomerReview() {
  return (
    <div>
      {customerReviews.map((review) => (
        <div key={review?.user} className="xl:me-96 flex flex-col gap-1 mt-5 ">
          {/* name star */}
          <div className="flex items-center gap-2">
            <img src={review?.avatar} alt="reviewer" className="h-8" />
            <p className="text-sm font-medium">{review?.user}</p>
          </div>

          {/* Star Rating */}
          <div className="flex items-center ">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow" />
            ))}
            <p className=" font-semibold text-black ps-2"> {review?.topic}</p>
          </div>
          {/*  date review */}
          <p className="text-sm font-medium">{review?.date}</p>

          <div className="flex gap-2 text-sm font-medium">
            <p>Size: {review.itemDetails.size}</p> |{" "}
            <p>Colour: {review.itemDetails.color}</p> |{" "}
            <p>
              {review.itemDetails.verified
                ? "Verified Purchase"
                : "Unverified Purchase"}
            </p>
          </div>
          {/* review content */}
          <p className="font-semibold text-sm">{review?.reviewContent}</p>
          {/* helpful action */}
        </div>
      ))}
    </div>
  );
}

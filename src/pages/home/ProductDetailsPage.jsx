import ProductMultiPhoto from "../../components/detailsPagePricing/ProductMultiPhoto";
import SelectedDetails from "../../components/detailsPagePricing/SelectedDetails";
import PriceHeading from "../../components/detailsPagePricing/PriceHeading";
import MainPrice from "../../components/detailsPagePricing/MainPrice";
import VariantProduct from "../../components/detailsPagePricing/VariantProduct";
import SpecificationsProduct from "../../components/detailsPagePricing/SpecificationsProduct";
import AboutDetailsProduct from "../../components/detailsPagePricing/AboutDetailsProduct";
import TradingAddCart from "../../components/detailsPagePricing/TradingAddCart";
import NonTradingCart from "../../components/detailsPagePricing/NonTradingCart";
import { productCover } from "../../../utils/phoneStaticData";
import ProductCoverImages from "../../components/detailsPagePricing/ProductCoverImages";
import { FaChevronDown, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ratingsCurrentProduct } from "../../../utils/staticUserData";
import customerReviews from "../../../utils/dummyData/reviewsCustomer";

export default function ProductDetailsPage() {
  const data = customerReviews;
  console.log(data);
  return (
    <div className="my-3">
      <div className=" flex justify-between xl:px-28 px-2 mx-auto">
        {/* PHOTO INTRODUCE */}
        <div className="flex justify-center w-5/12">
          {/* MULTI PHOTO DISPLAY */}
          <div className="mx-auto w-1/12">
            <ProductMultiPhoto />
          </div>
          {/* SELECTED PHOTO */}
          <div className="w-11/12">
            <SelectedDetails />
          </div>
        </div>

        {/* DETAILS AND ORDER CART */}
        <div className="flex mx-auto w-7/12">
          {/* HEADING */}
          <div className="mx-auto  w-7/12">
            <PriceHeading />

            {/* PRICE */}
            <MainPrice />
            <div className="text-xs font-semibold">
              <p>Size 128</p>
              <p>Style Iphone</p>
            </div>
            <VariantProduct />

            {/* Specification */}

            <SpecificationsProduct />
            {/* ABOUT ITEMS */}
            <div className=" mt-5">
              <AboutDetailsProduct />
            </div>
            {/* Product SELLER image   */}
            <div>
              <img
                className=" w-96 h-30"
                src="https://m.media-amazon.com/images/G/40/Apple/River/AuthorizedReseller_Black_EN_800x190_ME._CB572981095_.jpg"
                alt="apple"
              />
            </div>
          </div>

          {/* PRICING BY TRADE */}
          <div className="w-5/12 mx-2 rounded-md">
            <div className="rounded-md  border-2 ">
              {/* TRADING */}
              <TradingAddCart />
              {/*NON TRADING */}
              <NonTradingCart />
            </div>
          </div>
        </div>
      </div>

      {/* PROD DETAILS COVER IMAGE */}
      <div className="xl:mx-28">
        <ProductCoverImages />
      </div>
      {/* RATINGS & REVIEW __Product */}
      <div className="flex gap-3">
        {/* Ratings Distribution */}
        <div className="xl:w-4/12 xl:px-32 h-auto">
          {/* the Product Rating Star */}
          <div>
            <h3 className="text-xl font-bold">Customer Reviews</h3>

            <div className=" flex justify-start items-center gap-3">
              <div className=" flex  items-center justify-center gap-[2px]">
                {[...Array(4)].map((star, i) => (
                  <FaStar className=" h-5 w-5 text-yellow" key={i} />
                ))}
                <FaRegStar className="h-5 w-5 text-yellow" />
              </div>
              <h6 className=" text-xl  font-medium">4.1 out of 5</h6>
            </div>
            <p className=" my-3 text-sm font-medium">183 global ratings</p>
          </div>

          {/* Rating Breakdown, it's  definition */}
          <div>
            <div className="">
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
            </div>
          </div>

          {/* Review Link Button */}
          <div className="flex flex-col  justify-center gap-3">
            <h5 className="text-xl font-bold">Review this product</h5>
            <p className="font-semibold text-xs">
              Share your thoughts with other customers
            </p>
            <button className="text-sm font-medium border px-10 py-1 rounded-full hover:bg-gray-100">
              Write a customer Review
            </button>
          </div>
        </div>

        {/* Customer Review content */}
        <div className="w-8/12">
          <div>
            <h5 className="text-xl font-semibold">
              Top reviews from Saudi Arabia
            </h5>
            {customerReviews.map((review) => (
              <div
                key={review?.user}
                className="xl:me-96 flex flex-col gap-1 mt-5 "
              >
                {/* name star */}
                <div className="flex items-center gap-2">
                  <img src={review?.avatar} alt="reviewer" className="h-8" />
                  <p className="text-sm font-medium">{review?.user}</p>
                </div>

                {/* Star Rating */}
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow" />
                  ))}
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
        </div>
      </div>

      {/* FULL WIDTH SECTION */}
    </div>
  );
}

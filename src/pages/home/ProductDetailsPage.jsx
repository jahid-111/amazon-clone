import ProductMultiPhoto from "../../components/detailsPagePricing/ProductMultiPhoto";
import SelectedDetails from "../../components/detailsPagePricing/SelectedDetails";
import PriceHeading from "../../components/detailsPagePricing/PriceHeading";
import MainPrice from "../../components/detailsPagePricing/MainPrice";
import VariantProduct from "../../components/detailsPagePricing/VariantProduct";
import SpecificationsProduct from "../../components/detailsPagePricing/SpecificationsProduct";
import AboutDetailsProduct from "../../components/detailsPagePricing/AboutDetailsProduct";
import TradingAddCart from "../../components/detailsPagePricing/TradingAddCart";
import NonTradingCart from "../../components/detailsPagePricing/NonTradingCart";
import ProductCoverImages from "../../components/detailsPagePricing/ProductCoverImages";
import RatingStar from "../../components/detailsPagePricing/ratingReview/RatingStar";
import RatingsBreakdown from "../../components/detailsPagePricing/ratingReview/RatingsBreakdown";
import ReviewLink from "../../components/detailsPagePricing/ratingReview/ReviewLink";
import CustomerReview from "../../components/detailsPagePricing/ratingReview/CustomerReview";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";

import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";

export default function ProductDetailsPage() {
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
      <div className="flex gap-3 px-2 my-10">
        {/* Ratings Distribution */}
        <div className="xl:w-4/12 xl:px-32 h-auto">
          {/* the Product Rating Star */}
          <div>
            <h3 className="text-xl font-bold">Customer Reviews</h3>

            <RatingStar />
          </div>

          {/* Rating Breakdown, it's  definition */}
          <div>
            <RatingsBreakdown />
          </div>

          {/* Review Link Button */}
          <ReviewLink />
        </div>

        {/* Customer Review content */}
        <div className="w-8/12">
          <div>
            <h5 className="text-xl font-semibold">
              Top reviews from Saudi Arabia
            </h5>
            <CustomerReview />
          </div>
        </div>
      </div>

      {/* FULL WIDTH SECTION */}
      <div className="p-4">
        {/* <h1 className="text-2xl font-bold mb-4">Horizontal Scroll Example</h1> */}
        <div className=" my-3">
          <h5 className="font-semibold text-gray-500">
            Related to items you have viewed
          </h5>
          <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <DetailsPriceCard customClass="h-56 w-56" />
              </div>
            ))}
          </HorizontalScroll>
        </div>
        <div className=" my-3">
          <h5 className="font-semibold text-gray-500">
            More items to consider
          </h5>
          <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <DetailsPriceCard customClass="h-56 w-56" />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </div>
    </div>
  );
}

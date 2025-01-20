import TradingAddCart from "../../components/detailsPagePricing/TradingAddCart";
import NonTradingCart from "../../components/detailsPagePricing/NonTradingCart";
import ProductCoverImages from "../../components/detailsPagePricing/ProductCoverImages";
import RatingStar from "../../components/detailsPagePricing/ratingReview/RatingStar";
import RatingsBreakdown from "../../components/detailsPagePricing/ratingReview/RatingsBreakdown";
import ReviewLink from "../../components/detailsPagePricing/ratingReview/ReviewLink";
import CustomerReview from "../../components/detailsPagePricing/ratingReview/CustomerReview";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import PriceCompare from "../../components/compareProduct/PriceCompare";
import HeaderMain from "../../components/HeaderMain";
import useScrollToVisible from "../../hooks/useScrollToVisible";
import Footer from "../../components/Footer";
import ProductViewer from "../../components/detailsPagePricing/ProductViewer";
import SpecificationProduct from "../../components/test/SpecificationProduct";
import detailsProducts from "../../../utils/dummyData/detailsProducts";
import { useState } from "react";

export default function ProductDetailsPage() {
  const { isVisible } = useScrollToVisible();

  const product = detailsProducts;
  const [data, setData] = useState({
    current: product[0],
    photo: product[0].photos[1].allPhotos,
    index: 0,
  });

  const [activeIndex, setActiveIndex] = useState(1);
  // console.log(activeIndex);
  return (
    <>
      {isVisible && <HeaderMain />}
      <main id="main" className="my-3 px-2">
        <div className=" flex justify-between xl:px-28  mt-28">
          {/* PHOTO INTRODUCE */}
          <div className="flex justify-center h-screen w-5/12">
            <ProductViewer product={data?.current} />
          </div>

          {/* DETAILS AND ORDER CART */}
          <div className="flex mx-auto w-7/12">
            {/* HEADING */}
            <div className="mx-auto  w-7/12">
              <SpecificationProduct
                allProduct={product}
                test={data}
                onLoadProduct={setData}
              />
            </div>

            {/* PRICING BY TRADE */}
            <div className="  w-5/12 mx-2 rounded-md">
              <div className="rounded-md  border-2 ">
                <div className="hover:bg-gray-300">
                  <TradingAddCart
                    title="Etymology"
                    isActive={activeIndex === 0}
                    onShow={() => setActiveIndex(0)}
                  />
                </div>

                <div className="hover:bg-gray-300">
                  <NonTradingCart
                    title="Etymology"
                    isActive={activeIndex === 1}
                    onShow={() => setActiveIndex(1)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROD DETAILS COVER IMAGE */}
        <div className="xl:mx-28 bg-red-300 m-2">
          <ProductCoverImages />
        </div>
        {/* RATINGS & REVIEW __Product */}
        <div className="flex gap-3 px-2 my-10">
          <div className="xl:w-4/12 xl:px-32 h-auto">
            <h3 className="text-xl font-bold">Customer Reviews</h3>

            <RatingStar />

            <RatingsBreakdown />

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

        {/* Price Compare Product */}
        <PriceCompare />
        {/* FULL WIDTH SECTION */}
        <div className="p-4">
          {/* <h1 className="text-2xl font-bold mb-4">Horizontal Scroll Example</h1> */}
          <div className=" my-3">
            <h5 className="font-semibold text-gray-500">
              Related to items you have viewed
            </h5>
            {/* <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
              {dummyProductsOne.map((prod, i) => (
                <div key={i} className="flex-shrink-0">
                  <DetailsPriceCard
                    product={prod}
                    customClass="h-44 w-22 p-5"
                  />
                </div>
              ))}
            </HorizontalScroll> */}
          </div>
          <div className=" my-3">
            <h5 className="font-semibold text-gray-500">
              More items to consider
            </h5>
            {/* <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
              {product.map((prod, i) => (
                <div key={i} className="flex-shrink-0">
                  <DetailsPriceCard
                    productInfo={prod}
                    customClass="h-44 w-22 p-5"
                  />
                </div>
              ))}
            </HorizontalScroll> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

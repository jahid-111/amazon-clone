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

      <div className=" xl:mx-28">
        <ProductCoverImages />
      </div>
      {/* FULL WIDTH SECTION */}
    </div>
  );
}

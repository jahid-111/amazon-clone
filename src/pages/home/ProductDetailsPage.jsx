import ProductMultiPhoto from "../../components/detailsPagePricing/ProductMultiPhoto";
import SelectedDetails from "../../components/detailsPagePricing/SelectedDetails";
import PriceHeading from "../../components/detailsPagePricing/PriceHeading";
import MainPrice from "../../components/detailsPagePricing/MainPrice";
import VariantProduct from "../../components/detailsPagePricing/VariantProduct";
import SpecificationsProduct from "../../components/detailsPagePricing/SpecificationsProduct";
import AboutDetailsProduct from "../../components/detailsPagePricing/AboutDetailsProduct";
import TradingAddCart from "../../components/detailsPagePricing/TradingAddCart";
import NonTradingCart from "../../components/detailsPagePricing/NonTradingCart";

export default function ProductDetailsPage() {
  return (
    <div>
      <div className=" flex justify-between px-28">
        {/* PHOTO INTRODUCE */}
        <div className=" border flex">
          {/* MULTI PHOTO DISPLAY */}
          <div className=" w-40 border h-screen ">
            <ProductMultiPhoto />
          </div>
          {/* SELECTED PHOTO */}
          <SelectedDetails />
        </div>

        {/* DETAILS AND ORDER CART */}
        <div className="border flex p-2">
          {/* HEADING */}
          <div className="">
            <PriceHeading />

            {/* PRICE */}

            <MainPrice />
            <VariantProduct />

            <div>
              <p>size 128</p>
              <p>Style Iphone</p>
            </div>

            {/* Specification */}

            <SpecificationsProduct />
            {/* ABOUT ITEMS */}
            <div className=" mt-5">
              <AboutDetailsProduct />
            </div>
            {/* SELLER Product */}
            <div>
              <img
                className=" w-96 h-30"
                src="https://m.media-amazon.com/images/G/40/Apple/River/AuthorizedReseller_Black_EN_800x190_ME._CB572981095_.jpg"
                alt="apple"
              />
            </div>
          </div>

          {/* PRICING BY TRADE */}
          <div className="w-72 h-screen border-2 m-2 rounded-md">
            <div className="rounded-md ">
              {/* TRADING */}
              <TradingAddCart />
              {/*NON TRADING */}
              <NonTradingCart />
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH SECTION */}
    </div>
  );
}

import { Link } from "react-router-dom";
import ProdDetailsDisplayCard from "../../components/cards/ProdDetailsDisplayCard";
import InputRadio from "../../components/radioSelect/InputRadio";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";
import Footer from "../../components/Footer";
import dummyProductsOne from "../../../utils/dummyData/productListOne";
import brandImage from "../../../utils/imageExports.js";
import HeaderMain from "../../components/HeaderMain.jsx";
export default function TodaysDeals() {
  return (
    <div className="">
      <HeaderMain />
      <section className="flex justify-center xl:w-10/12 mx-auto px-3 mt-24 pt-10">
        <div className="w-2/12">
          <InputRadio />
        </div>
        <div className="w-10/12 p-2">
          <HorizontalScroll containerStyles="horizontal-scroll gap-5 pt-2 pb-7 my-4">
            <div className="flex gap-3">
              {brandImage.map((img, index) => (
                <img
                  key={index}
                  className="h-44 w-44 rounded-full border"
                  src={img?.src}
                  alt={img?.alt || "Brand image"}
                />
              ))}
            </div>
          </HorizontalScroll>

          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {[...Array(34)].map((item, i) => (
              <ProdDetailsDisplayCard key={i} />
            ))}
          </div>
        </div>
      </section>

      <div className=" mt-10">
        {/* Horizontal Scroll Section */}
        <section className=" mx-auto px-4">
          <h6 className=" text-xl font-semibold ps-10">
            Inspired by your browsing history
          </h6>
          <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
            {dummyProductsOne.map((prod, i) => (
              <div key={i} className="flex-shrink-0">
                <DetailsPriceCard product={prod} customClass="h-44 w-22 p-5" />
              </div>
            ))}
          </HorizontalScroll>
          <HorizontalScroll containerStyles="gap-5 pt-2 pb-7 mt-6">
            {dummyProductsOne.map((prod, i) => (
              <div key={i} className="flex-shrink-0">
                <DetailsPriceCard product={prod} customClass="h-44 w-22 p-5" />
              </div>
            ))}
          </HorizontalScroll>
          <hr className="border-gray-500 w-11/12 mx-auto" />
          {/* AUTH CONTENT*/}
          <section className="py-4 px-4">
            <div className=" flex flex-col gap-2 justify-center items-center">
              <h4 className="text-2xl font-semibold text-gray-700">
                See personalized recommendations
              </h4>
              <button className=" bg-[#f7dc2e] py-1 px-28 rounded-full">
                <span className=" text-gray-600"> Signin</span>
              </button>
              <p className=" text-xs">
                <span className=" font-semibold"> New customer? </span>
                <Link to={"/"} className=" text-blue underline">
                  Start here.
                </Link>
              </p>
            </div>
          </section>
          <hr className="border-gray-500 my-3" />
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

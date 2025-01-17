import ScrollHrCard from "../../components/cards/ScrollHrCard";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import imageOne from "/images/sliderImage/hr-image/hr_one.jpg";
import imageTwo from "/images/sliderImage/hr-image/hr_two.jpg";
import imageThree from "/images/sliderImage/hr-image/hr_three.jpg";
import imageFour from "/images/sliderImage/hr-image/hr_four.jpg";
import brandImages from "../../../utils/imageExports";
import SideNav from "../../components/sideNav/SideNav";
import SliderAuto from "../../components/slider/Slider";
import WidePhoto from "../../components/reUseComponents/images/WidePhoto";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";

import imageWidh1 from "/electricPage/widePhoto/1500x200_EN.jpg";
import imageWidh2 from "/electricPage/widePhoto/Anker-Web.jpg";
import imageWidh3 from "/electricPage/widePhoto/KTC-L2-1500x250_1x.jpg";
import imageWidh4 from "/electricPage/widePhoto/L2banner_web_en.jpg";
import {
  aboutUs,
  helpAndSupport,
  makeMoneyWithUs,
  shopWithUs,
} from "../../../utils/staticUserData";
import { Link } from "react-router-dom";
import BackToTop from "../../components/reUseComponents/BackToTop";
import HeaderMain from "../../components/HeaderMain";
import dummyProductsOne from "../../../utils/dummyData/productListOne";
const slides = [imageOne, imageTwo, imageThree, imageFour];
const witdhImge = [imageWidh1, imageWidh2, imageWidh3, imageWidh4];
export default function ElectronicPage() {
  return (
    <>
      <HeaderMain />
      <main id="main" className="px-3">
        <section className="flex justify-center mx-auto ">
          <div className=" xl:w-[12%] w-[20%] pe-2">
            <SideNav />
          </div>

          <div className="border xl:w-[88%] w-[80%] px-2">
            <h3 className="text-3xl font-bold text-black ms-4">Electronics</h3>
            {/* HORIZONTAL SCROLL */}
            <div className="w-full px-10 my-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1 ms-7">
                Shop by category
              </h3>

              <HorizontalScroll containerStyles="horizontal-scroll gap-5 pt-2 pb-7 my-4">
                <div className="flex gap-3">
                  {brandImages.map((img, index) => (
                    <img
                      key={index}
                      className="h-44 w-44 rounded-full border"
                      src={img?.src}
                      alt={img?.alt || "Brand image"}
                    />
                  ))}
                </div>
              </HorizontalScroll>
            </div>
            {/* SLIDER */}
            <div className=" px-4 pb-4 bg-gray-300">
              <SliderAuto slides={slides} intervalTime="2000" customClass="" />
            </div>

            {/* HORIZONTAL SCROLL */}
            <div className="w-full px-2 mt-7 border-b">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1 border-b">
                New Arrivals
              </h3>

              <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                {dummyProductsOne.map((prod, i) => (
                  <div key={i} className="flex-shrink-0">
                    <DetailsPriceCard
                      product={prod}
                      customClass="h-44 w-22 p-5"
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </div>

            {/* BRAND IMAGES */}
            <div className=" py-5 border-b">
              <h4 className=" text-2xl font-semibold text-center my-5">
                Featured brands
              </h4>
              <div className=" grid grid-cols-6 gap-3">
                {brandImages.map((img, i) => (
                  <div key={i}>
                    <img className="" src={img.src} alt={img.name} />
                  </div>
                ))}
              </div>
            </div>
            {/* HORIZONTAL SCROLL */}
            <div className="w-full px-2 mt-20">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1 border-b">
                Shop Amazon Devices
              </h3>

              <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                {dummyProductsOne.map((prod, i) => (
                  <div key={i} className="flex-shrink-0">
                    <DetailsPriceCard
                      product={prod}
                      customClass="h-44 w-22 p-5"
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </div>
            {/* WIDTH PHOTO */}
            <div className=" flex flex-col gap-2">
              {witdhImge.map((img, i) => (
                <WidePhoto key={i} img={img} />
              ))}
            </div>

            {/* HORIZONTAL SCROLL DIGITAL CONTENT */}
            <div className="w-full px-2 mt-20 ">
              <h3 className="text-3xl font-semibold text-start pt-4 pb-1">
                Top picks in Digital Content
              </h3>

              <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                {dummyProductsOne.map((prod, i) => (
                  <div key={i} className="flex-shrink-0">
                    <DetailsPriceCard
                      product={prod}
                      customClass="h-44 w-22 p-5"
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </div>

            {/* EXPLORE */}
            <div className="w-full px-2 mt-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1 border-b">
                Explore top picks
              </h3>
              <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                {dummyProductsOne.map((prod, i) => (
                  <div key={i} className="flex-shrink-0">
                    <DetailsPriceCard
                      product={prod}
                      customClass="h-44 w-22 p-5"
                    />
                  </div>
                ))}
              </HorizontalScroll>
            </div>

            {/* LAST DIVIDER */}
            <div className="py-3 border my-3 rounded-lg">
              <p className="text-sm font-semibold ps-20">
                <span>1-12 of over 40,000 results for </span>
                <span className="text-orange-700">Electronics</span>
              </p>
            </div>
            <div>
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-10 mb-20 ">
                {[...Array(15)].map((item, index) => (
                  <div key={index} className=" relative">
                    <DetailsPriceCard
                      customClass=" h-[15rem] w-[20rem]"
                      isBestSeller={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary">
        <BackToTop /> {/*BACK TO TOP*/}
        <div className=" mx-auto text-gray-200 ">
          {/* TOP Footer */}
          <div className="flex gap-5 justify-center items-center">
            <div className=" min-h-80  w-72 my-10 p-7 ">
              <h5 className="font-bold text-white mb-2">Get To know Us</h5>
              <ul className="flex flex-col justify-center items-start">
                {aboutUs.map((link) => (
                  <li key={link} className=" font-">
                    <Link to={"/"} className=" hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" min-h-80  w-72 my-10 p-7">
              <h5 className="font-bold text-white mb-2">Shop With Us</h5>
              <ul className="flex flex-col justify-center items-start yes">
                {shopWithUs.map((link) => (
                  <li key={link} className=" font-">
                    <Link to={"/"} className=" hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" min-h-80  w-72 my-10 p-7">
              <h5 className="font-bold text-white mb-2">Make Money with Us</h5>
              <ul className="flex flex-col justify-center items-start yes">
                {makeMoneyWithUs.map((link) => (
                  <li key={link} className=" font-">
                    <Link to={"/"} className=" hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" min-h-80  w-72 my-10 p-7">
              <h5 className="font-bold text-white mb-2">Let Us Help You</h5>
              <ul className="flex flex-col justify-center items-start yes">
                {helpAndSupport.map((link) => (
                  <li key={link} className=" font-">
                    <Link to={"/"} className=" hover:underline">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* BOTTOM Footer */}
          <div className=" bg-gray-900">
            <p className=" text-center py-3">
              ©1996–2025, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

import Header from "../../components/singleRoot/Header";
import useScrollToVisible from "../../hooks/useScrollToVisible";
import Navigation from "../../components/singleRoot/Navigation";
import SliderAuto from "../../components/reUseComponents/SliderAuto";
import SellPrimaryCard from "../../components/cards/SellPrimaryCard";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import ScrollHrCard from "../../components/cards/ScrollHrCard";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";
import { Link } from "react-router-dom";
import {
  aboutUs,
  helpAndSupport,
  makeMoneyWithUs,
  shopWithUs,
} from "../../../utils/staticUserData";

export default function HomePage() {
  const { isVisible } = useScrollToVisible();
  return (
    <div>
      <section className=" bg-yellow">
        {/* Fixed Header */}
        <div id="header" className="fixed top-0 w-full z-50">
          <Header />

          {/* NAVIGATOR */}
          <div
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0 delay-300"
                : "opacity-0 translate-y-[-20px] delay-0" // No delay when hidden
            }`}
          >
            <Navigation />
          </div>
        </div>

        <main id="main" className="relative mt-24 xl:w-11/12 mx-auto">
          {/* HERO SECTION */}
          <div className="h-[40rem]">
            <SliderAuto />
          </div>

          {/* Content Section */}
          <div className="absolute flex flex-col items-center top-64 w-full px-2 ">
            {/* Common Parent Container for Consistent Width */}
            <section className="w-full xl:max-w-screen-2xl p-4">
              {/* Cards Grid */}
              <div className="w-full  mb-4">
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                  {[...Array(8)].map((_, card) => (
                    <SellPrimaryCard key={card} />
                  ))}
                </div>
              </div>

              {/* Horizontal Scroll Section */}
              <div className="w-full bg-gray-100 px-2 mt-7">
                <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                  Top picks on children books from SAR 6
                </h3>

                <HorizontalScroll>
                  {[...Array(16)].map((_, index) => (
                    <ScrollHrCard
                      imageClass="w-32 h-56 cursor-pointer"
                      key={index}
                    />
                  ))}
                </HorizontalScroll>
              </div>

              {/* Cards Grid */}
              <div className="w-full mb-4 mt-7">
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                  {[...Array(4)].map((_, card) => (
                    <SellPrimaryCard key={card} />
                  ))}
                </div>
              </div>
              {/* Horizontal Scroll Section */}
              <div className="w-full bg-gray-100 px-2 mt-7">
                <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                  Top picks on children books from SAR 6
                </h3>

                <HorizontalScroll>
                  {[...Array(16)].map((_, index) => (
                    <ScrollHrCard
                      imageClass="w-32 h-56 cursor-pointer"
                      key={index}
                    />
                  ))}
                </HorizontalScroll>
              </div>

              {/* Cards Grid */}
              <div className="w-full mb-4 mt-7">
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                  {[...Array(4)].map((_, card) => (
                    <SellPrimaryCard key={card} />
                  ))}
                </div>
              </div>
              {/* Horizontal Scroll Section */}
              <div className="w-full bg-gray-100 px-2 mt-7">
                <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                  Top picks on children books from SAR 6
                </h3>

                <HorizontalScroll>
                  {[...Array(16)].map((_, index) => (
                    <ScrollHrCard
                      imageClass="w-32 h-56 cursor-pointer"
                      key={index}
                    />
                  ))}
                </HorizontalScroll>
              </div>

              {/* Cards Grid */}
              <div className="w-full mb-4 mt-7">
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                  {[...Array(4)].map((_, card) => (
                    <SellPrimaryCard key={card} />
                  ))}
                </div>
              </div>
              {/* Horizontal Scroll Section */}
              <div className="w-full bg-gray-100 px-2 mt-7">
                <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                  Top picks on children books from SAR 6
                </h3>

                <HorizontalScroll>
                  {[...Array(16)].map((_, index) => (
                    <ScrollHrCard
                      imageClass="w-32 h-56 cursor-pointer"
                      key={index}
                    />
                  ))}
                </HorizontalScroll>
              </div>

              {/* Cards Grid */}
              <div className="w-full mb-4 mt-7">
                <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                  {[...Array(4)].map((_, card) => (
                    <SellPrimaryCard key={card} />
                  ))}
                </div>
              </div>

              {/* Horizontal Scroll Section */}
              <div className="w-full bg-gray-100 px-2 mt-7">
                <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                  Top picks on children books from SAR 6
                </h3>

                <HorizontalScroll>
                  {[...Array(16)].map((_, index) => (
                    <ScrollHrCard
                      imageClass="w-32 h-56 cursor-pointer"
                      key={index}
                    />
                  ))}
                </HorizontalScroll>
              </div>

              {/* LAST ELEMENT FULL SCROLL WITH FOOTER*/}
              <section className="absolute left-0 right-0 xl:-left-16 xl:-right-16 bg-white -mx-2 mt-10">
                <hr className="border-gray-500 py-8" />
                {/* Horizontal Scroll Section */}
                <div className=" mx-auto px-4">
                  <h6 className=" text-xl font-semibold ps-10">
                    Inspired by your browsing history
                  </h6>
                  <HorizontalScroll>
                    <section className="flex justify-between gap-3 overflow-x-auto py-8 px-8">
                      {[...Array(16)].map((_, index) => (
                        <DetailsPriceCard key={index} />
                      ))}
                    </section>
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
                </div>
                {/* FOOTER */}
                <footer className="bg-primary">
                  <button className=" block text-center w-full bg-slate-700 hover:bg-slate-600 text-gray-200 py-4 text-xs font-semibold">
                    BACK TO TOP
                  </button>
                  <div className=" mx-auto text-gray-200 ">
                    {/* TOP Footer */}
                    <div className="flex gap-5 justify-center items-center">
                      <div className=" min-h-80  w-72 my-10 p-7 ">
                        <h5 className="font-bold text-white mb-2">
                          Get To know Us
                        </h5>
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
                        <h5 className="font-bold text-white mb-2">
                          Shop With Us
                        </h5>
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
                        <h5 className="font-bold text-white mb-2">
                          Make Money with Us
                        </h5>
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
                        <h5 className="font-bold text-white mb-2">
                          Let Us Help You
                        </h5>
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
              </section>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

import "./App.css";

import Navigation from "./components/singleRoot/Navigation";
import Header from "./components/singleRoot/Header";
import SliderAuto from "./components/reUseComponents/SliderAuto";
import useScrollToVisible from "./hooks/useScrollToVisible";
import SellPrimaryCard from "./components/cards/SellPrimaryCard";
import ScrollHrCard from "./components/cards/ScrollHrCard";
import HorizontalScroll from "./components/reUseComponents/HorizontalScroll";
import { Link } from "react-router-dom";
import DetailsPriceCard from "./components/cards/DetailsPriceCard";

function App() {
  const { isVisible } = useScrollToVisible();

  return (
    <section>
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
        <section className="absolute flex flex-col items-center top-64 w-full px-2 ">
          {/* Common Parent Container for Consistent Width */}
          <div className="w-full xl:max-w-screen-2xl p-4">
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

            {/* LAST ELEMENT FULL SCROLL*/}
            <div className="absolute left-0 right-0 xl:-left-16 xl:-right-16 bg-white py-8 -mx-2 mt-10">
              <hr className="border-gray-500 py-4" />
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
                <hr className="border-gray-500" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;

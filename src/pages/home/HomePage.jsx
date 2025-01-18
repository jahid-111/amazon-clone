import SliderAuto from "../../components/reUseComponents/SliderAuto";
import SellPrimaryCard from "../../components/cards/SellPrimaryCard";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderMain from "../../components/HeaderMain";
import detailsProducts from "../../../utils/dummyData/detailsProducts";
import allProducts from "../../../utils/dummyData/allProducts";

export default function HomePage() {
  const product = allProducts;
  // console.log(product);
  // const { brand, rating } = product[0];
  // console.log(brand, rating);

  return (
    <div>
      <section className="">
        {/* Fixed Header */}
        <HeaderMain />

        <main id="main" className="relative mt-24 xl:w-11/12 mx-auto">
          {/* HERO SECTION */}
          <div className="h-[40rem]">
            <SliderAuto customClass={"w-full h-full object-cover shrink-0"} />
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
                  Top picks on children books from SAR DEV
                </h3>
                <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                  {product.map((prod, i) => (
                    <div key={i} className="flex-shrink-0">
                      <DetailsPriceCard
                        productInfo={prod}
                        customClass="h-44 w-22 p-5"
                      />
                    </div>
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
                  Top picks on children books from SAR 2
                </h3>

                <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                  {product.map((prod, i) => (
                    <div key={i} className="flex-shrink-0">
                      <DetailsPriceCard
                        productInfo={prod}
                        customClass="h-44 w-22 p-5"
                      />
                    </div>
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
                  Top picks on children books from SAR 3
                </h3>

                <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                  {product.map((prod, i) => (
                    <div key={i} className="flex-shrink-0">
                      <DetailsPriceCard
                        productInfo={prod}
                        customClass="h-44 w-22 p-5"
                      />
                    </div>
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
                  Top picks on children books from SAR 4
                </h3>

                <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                  {product.map((prod, i) => (
                    <div key={i} className="flex-shrink-0">
                      <DetailsPriceCard
                        productInfo={prod}
                        customClass="h-44 w-22 p-5"
                      />
                    </div>
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

                <HorizontalScroll containerStyles="gap-5 pt-2 pb-7">
                  {product.map((prod, i) => (
                    <div key={i} className="flex-shrink-0">
                      <DetailsPriceCard
                        productInfo={prod}
                        customClass="h-44 w-22 p-5"
                      />
                    </div>
                  ))}
                </HorizontalScroll>
              </div>

              {/* LAST ELEMENT FULL SCROLL WITH FOOTER*/}
              <section className="absolute left-0 right-0 xl:-left-16 xl:-right-16 -mx-2 mt-10  bg-gray-100">
                <hr className="border-gray-500 my-8" />
                {/* Horizontal Scroll Section */}
                <div className=" mx-auto px-4">
                  <h6 className=" text-xl font-semibold ps-10 pb-5">
                    Inspired by your browsing history 5
                  </h6>
                  <HorizontalScroll containerStyles="gap-5 pt-2 pb-7 mb-2">
                    {product.map((prod, i) => (
                      <div key={i} className="flex-shrink-0">
                        <DetailsPriceCard
                          productInfo={prod}
                          customClass="h-44 w-22 p-5"
                        />
                      </div>
                    ))}
                  </HorizontalScroll>
                  <hr className="border-gray-500 w-11/12  mx-auto" />
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
                <Footer />
              </section>
            </section>
          </div>
        </main>
      </section>
    </div>
  );
}

import ScrollHrCard from "../../components/cards/ScrollHrCard";
import InputRadio from "../../components/radioSelect/InputRadio";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import Slider from "../../components/test/Slider";

import imageOne from "../../../public/images/sliderImage/hr-image/hr_one.jpg";
import imageTwo from "../../../public/images/sliderImage/hr-image/hr_two.jpg";
import imageThree from "../../../public/images/sliderImage/hr-image/hr_three.jpg";
import imageFour from "../../../public/images/sliderImage/hr-image/hr_four.jpg";
import brandImages from "../../../utils/imageExports";
import SideNav from "../../components/sideNav/SideNav";

const slides = [imageOne, imageTwo, imageThree, imageFour];

export default function Electronics() {
  return (
    <div>
      <section className="flex justify-center mx-auto px-3">
        <div className="w-[10%]">
          <SideNav />
        </div>

        {/* SCROLL X */}
        <div className="border w-[90%]">
          <h3 className="text-3xl font-bold text-black">Electronics</h3>
          {/* Horizontal Scroll Section */}
          <div className="w-full bg-gray-100 px-2 mt-7">
            <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
              Shop by category
            </h3>

            <HorizontalScroll>
              {[...Array(16)].map((_, index) => (
                <ScrollHrCard
                  imageClass="w-44 h-44 cursor-pointer border p-2 border-red-400 rounded-xl"
                  key={index}
                />
              ))}
            </HorizontalScroll>
          </div>
          {/* <SliderAuto customClass={"w-full h-96 object-cover shrink-0"} /> */}
          <div className=" px-4 pb-4 bg-gray-300">
            <Slider slides={slides} intervalTime="2000" customClass="" />
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

          <div>
            <div className="border p-2">
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
          </div>
        </div>
      </section>
    </div>
  );
}

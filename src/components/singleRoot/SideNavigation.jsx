import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import TrendingNav from "../sideNavigation/TrendingNav";
import DigitalContentNav from "../sideNavigation/DigitalContentNav";
import ShopCategoryNav from "../sideNavigation/ShopCategoryNav";
import ProgramFeatureNav from "../sideNavigation/ProgramFeatureNav";

export default function SideNavigation({ onClose }) {
  return (
    <nav className="">
      <div className="flex gap-1">
        <section className="h-screen w-[23rem] overflow-auto bg-white relative">
          {/* USER */}
          <div className=" sticky top-0 flex justify-start gap-4 items-center bg-primary text-gray-200 w-full px-10 py-3">
            <FaCircleUser className=" h-7 w-7" />
            <h3 className=" text-xl font-bold">Hello, Signin</h3>
          </div>

          {/* Trending Navigation */}
          <TrendingNav />

          {/* Digital content and devices */}
          <DigitalContentNav />

          {/* Shop by Category*/}
          <ShopCategoryNav />

          {/* Programs & Features*/}
          <ProgramFeatureNav />
        </section>

        {/* ========== CLOSE SIDEBAR BUTTON */}
        <div className=" mt-1">
          <button
            onClick={() => onClose(false)}
            className=" hover:border-gray-600 p-1 text-white hover:text-red-400 border rounded-sm border-gray-600"
          >
            <HiOutlineXMark className="h-7 w-7" />
          </button>
        </div>
      </div>
    </nav>
  );
}

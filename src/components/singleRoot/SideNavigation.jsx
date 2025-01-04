import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  digitalContents,
  programsFeatures,
  shopByCategory,
  trendingSideBar,
} from "../../../utils/staticUserData";
import { Link } from "react-router-dom";

export default function SideNavigation({ onClose }) {
  return (
    <nav className="">
      <div className="flex gap-1">
        <section className="h-screen w-[23rem] overflow-auto bg-white">
          {/* USER */}
          <div className=" flex justify-start gap-4 items-center bg-primary text-gray-200 w-full px-10 py-3">
            <FaCircleUser className=" h-7 w-7" />
            <h3 className=" text-xl font-bold">Hello, Signin</h3>
          </div>

          {/* Trending Navigation */}
          <div className="border-b pb-2 border-gray-300">
            <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
              Trending
            </h3>
            <ul className="flex flex-col justify-center items-center w-full">
              {trendingSideBar.map((trend) => (
                <li key={trend} className="w-full">
                  <Link
                    className=" hover:bg-gray-300 w-full block h-10 flex items-center "
                    to="/"
                  >
                    <span className="mx-10 font-semibold text-sm">{trend}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital content and devices */}
          <div className="border-b pb-2 border-gray-300">
            <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
              Digital content and devices
            </h3>
            <ul className="flex flex-col justify-center items-center w-full">
              {digitalContents.map((digital) => (
                <li key={digital} className="w-full">
                  <Link
                    className=" hover:bg-gray-300 w-full block h-10 flex items-center "
                    to="/"
                  >
                    <span className="mx-10 font-semibold text-sm">
                      {digital}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Shop by Category*/}
          <div className="border-b pb-2 border-gray-300">
            <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
              Shop by Category
            </h3>
            <ul className="flex flex-col justify-center items-center w-full">
              {shopByCategory.map((category) => (
                <li key={category} className="w-full">
                  <Link
                    className=" hover:bg-gray-300 w-full block h-10 flex items-center "
                    to="/"
                  >
                    <span className="mx-10 font-semibold text-sm">
                      {category}
                    </span>
                  </Link>
                </li>
              ))}
              see more...
            </ul>
          </div>
          {/* Programs & Features*/}
          <div className="border-b pb-2 border-gray-300">
            <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
              Programs and Feature
            </h3>
            <ul className="flex flex-col justify-center items-center w-full">
              {programsFeatures.map((program) => (
                <li key={program} className="w-full">
                  <Link
                    className=" hover:bg-gray-300 w-full block h-10 flex items-center "
                    to="/"
                  >
                    <span className="mx-10 font-semibold text-sm">
                      {program}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========== CLOSE SIDEBAR BUTTON */}
        <div className="p-1">
          <button
            onClick={() => onClose(false)}
            className=" hover:border-gray-600 p-2 text-white hover:text-red-400 mt-1 border rounded-sm border-gray-600"
          >
            <HiOutlineXMark className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
}

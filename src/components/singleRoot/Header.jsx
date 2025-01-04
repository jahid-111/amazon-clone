import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-firstClass">
      <div className="flex text-gray-100 justify-center items-center flex-wrap h-14">
        <div className="border h-full w-auto flex justify-center items-center p-2">
          <img
            className="h-10"
            src="../../../public/images/logoAmazon.png"
            alt="Logo"
          />
        </div>
        {/* BRAND_LOGO */}
        <div className="border h-full w-auto flex justify-center items-center text-[10pt] p-2">
          <div className="flex justify-between items-center gap-2 w-full">
            <MdOutlinePlace className=" h-5 w-5  text-orange-400" />
            <div>
              <p className="text-sm">Delivery Location</p>
              <p className="font-semibold">Update Location</p>
            </div>
          </div>
        </div>
        {/* SEARCHBAR */}
        <div className="flex-grow border h-full flex justify-center items-center p-2">
          <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between bg-gray-300 text-gray-800 hover:text-gray-950 rounded-l-md px-4 py-2">
              <button className="font-semibold">All</button>
              <IoMdArrowDropdown className="text-lg" />
            </div>
            <input
              className="w-full p-2 border-l border-gray-300 rounded-r-md outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search Amazon"
              aria-label="Search Amazon"
            />
            <button className="rounded-r-md px-4 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600">
              <IoIosSearch className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        <div className="border h-full w-[5%] flex justify-center items-center p-2">
          Lang
        </div>
        <div className="border h-full w-[10%] flex justify-center items-center p-2">
          Sign in
        </div>
        <div className="border h-full w-[5%] flex justify-center items-center p-2">
          Order
        </div>
        <div className="border h-full w-[7%] flex justify-center items-center p-2">
          Cart
        </div>
      </div>
    </header>
  );
}

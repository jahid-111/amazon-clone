import { BsCart } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import SearchBar from "./SearchBar";
import Language from "./Language";

export default function Header() {
  return (
    <header className="bg-firstClass  mx-auto">
      <div className="flex text-gray-100 justify-center items-center flex-wrap h-14">
        {/* BRAND_LOGO */}
        <div className=" h-full w-auto flex justify-center items-center p-2 border rounded-sm border-transparent hover:border-gray-400 transition-all duration-300">
          <img
            className="h-11 py-2 "
            src="../../../public/images/logoAmazon.png"
            alt="Logo"
          />
        </div>
        {/* LOCATION */}
        <div className=" h-full w-auto flex justify-center items-center text-[10pt] p-2">
          <button className="flex justify-between items-center gap-1 w-full p-1 border rounded-sm border-transparent hover:border-gray-400 transition-all duration-300">
            <MdOutlinePlace className=" h-5 w-5  text-orange-400" />
            <div>
              <p className="text-[0.7rem]">Delivery to Location</p>
              <p className="font-semibold">Update Location</p>
            </div>
          </button>
        </div>
        {/* SEARCHBAR */}
        <SearchBar />

        {/* LANGUAGE */}
        <Language />

        {/* ACCOUNTS USER */}
        <div className=" h-full w-[10%] flex justify-center items-center p-2  border rounded-sm border-transparent hover:border-gray-400 transition-all duration-300">
          <div>
            <p className=" text-xs text-gray-300">Hello signin</p>
            <div className=" flex justify-center items-center">
              <button className=" font-semibold text-sm">
                Accounts & Lists
              </button>
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>

        {/* ORDERS USER */}
        <div className="h-full w-[5%] flex justify-center items-center p-2">
          <button className="h-full w-full font-semibold relative border rounded-sm border-transparent hover:border-gray-400 transition-all duration-300">
            <span className=" absolute left-0 right-0  top-3 bottom-0">
              Orders
            </span>
          </button>
        </div>

        {/* CART USER */}
        <div className="h-full w-[7%] flex justify-center items-center p-2">
          <button className="flex justify-center items-center gap-1 relative border rounded-sm border-transparent hover:border-gray-400 transition-all duration-300">
            <BsCart className="h-12 w-12" />
            <h6 className="font-bold text-xs mt-6">Cart</h6>
            <span className="text-orange-400 font-semibold text-xs absolute left-[15px] bottom-[18px]">
              99+
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

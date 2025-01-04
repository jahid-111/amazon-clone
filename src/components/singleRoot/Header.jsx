import { BsCart } from "react-icons/bs";
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlinePlace } from "react-icons/md";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-firstClass  mx-auto">
      {/* BRAND_LOGO */}
      <div className="flex text-gray-100 justify-center items-center flex-wrap h-14 ms-2">
        <div className=" h-full w-auto flex justify-center items-center p-2">
          <img
            className="h-11 py-2 "
            src="../../../public/images/logoAmazon.png"
            alt="Logo"
          />
        </div>
        {/* LOCATION */}
        <div className=" h-full w-auto flex justify-center items-center text-[10pt] p-2">
          <div className="flex justify-between items-center gap-1 w-full">
            <MdOutlinePlace className=" h-5 w-5  text-orange-400" />
            <div>
              <p className="text-[0.7rem]">Delivery to Location</p>
              <p className="font-semibold">Update Location</p>
            </div>
          </div>
        </div>
        {/* SEARCHBAR */}
        <SearchBar />

        {/* LANGUAGE */}
        <div className=" h-full w-[5%] flex justify-center items-center p-2">
          <button className=" flex justify-center items-center gap-1">
            <LiaFlagUsaSolid className="text-gray-300" />
            EN
            <IoMdArrowDropdown />
          </button>
        </div>

        {/* ACCOUNTS USER */}
        <div className=" h-full w-[10%] flex justify-center items-center p-2">
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
        <div className=" h-full w-[5%] flex justify-center items-center p-2 relative">
          <h5 className=" font-semibold absolute bottom-2 ">Orders</h5>
        </div>
        {/* CART USER */}
        <div className=" h-full w-[7%] flex justify-center items-center p-2">
          <div className=" flex justify-center items-center gap-1 relative">
            <BsCart className=" h-12 w-12" />
            <h6 className="font-bold text-xs mt-6"> Cart</h6>
            <span className=" text-orange-400 font-semibold text-xs absolute left-[15px] bottom-[18px]">
              99+
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

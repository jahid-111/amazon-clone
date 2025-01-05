import { BsCart } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";
import SearchBar from "./SearchBar";
import Language from "./Language";

export default function Header() {
  return (
    <header className="bg-firstClass  text-gray-200 flex justify-between items-center gap-1 px-4 h-14 min-w-[930px] max-w-full">
      {/* LOGO */}

      <div className="border border-transparent hover:border-gray-200 rounded-sm flex justify-center items-center h-12 w-36">
        <img
          className="h-full py-2 object-contain"
          src="/images/logoAmazon.png"
          alt="Logo"
        />
      </div>

      {/* DELIVERY */}
      <div className="border border-transparent hover:border-gray-200 rounded-sm h-12 w-36 flex items-center justify-center">
        <button className="flex items-center space-x-2 w-36">
          <MdOutlinePlace className="h-5 w-5 text-orange-400" />
          <div className="text-left">
            <p className="text-[0.6rem]">Delivery to Location</p>
            <p className="font-semibold text-xs">Update Location</p>
          </div>
        </button>
      </div>

      {/* SEARCHBAR */}
      <div className=" h-12 w-[50%] ">
        <SearchBar />
      </div>
      {/* LANGUAGE */}
      <div className=" border border-transparent hover:border-gray-200 rounded-sm h-12 w-20">
        <Language />
      </div>

      {/* USER ACCOUNT */}
      <div className=" border border-transparent hover:border-gray-200 rounded-sm h-12 w-36 ">
        <div className="flex flex-col justify-center items-start w-36 p-1">
          <p className=" text-xs text-gray-300">Hello signin</p>
          <div className=" flex justify-center items-center">
            <button className=" font-semibold text-sm">Accounts & Lists</button>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>

      {/* ORDERS */}
      <div className="border border-transparent hover:border-gray-200 rounded-sm h-12 w-24 relative">
        <button className="h-full w-full font-semibold flex items-center justify-center relative">
          <span className="absolute bottom-2">Orders</span>
        </button>
      </div>

      {/* CART */}
      <div className=" border border-transparent hover:border-gray-200 rounded-sm px-1 ">
        <button className="flex justify-center items-center gap-1 relative transition-all duration-300">
          <BsCart className="h-12 w-12" />
          <h6 className="font-bold text-xs mt-6">Cart</h6>
          <span className="text-orange-400 font-semibold text-xs absolute left-[15px] bottom-[18px]">
            99+
          </span>
        </button>
      </div>
    </header>
  );
}

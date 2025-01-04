import { FaLocationArrow } from "react-icons/fa";

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
        <div className="border h-full w-auto flex justify-center items-center text-[10pt] p-2">
          <div className="flex justify-between items-center gap-2 w-full">
            <FaLocationArrow />
            <div>
              <p className="text-sm">Delivery Location</p>
              <p className="font-semibold">Update Location</p>
            </div>
          </div>
        </div>
        <div className="flex-grow border h-full flex justify-center items-center p-2">
          Search
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

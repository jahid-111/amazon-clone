import { Link } from "react-router-dom";
import { menuItems } from "../utils/staticUserData";

import "./App.css";
import { VscThreeBars } from "react-icons/vsc";

function App() {
  return (
    <section className="w-full">
      <header className="bg-firstClass">
        <div className="flex text-gray-100 justify-center items-center flex-wrap h-16">
          <div className="border h-full w-[10%] flex justify-center items-center">
            Logo
          </div>
          <div className="border h-full w-[10%] flex justify-center items-center">
            Delivery Location
          </div>
          <div className="border h-full w-[56%] flex justify-center items-center">
            Search
          </div>
          <div className="border h-full w-[3%] flex justify-center items-center">
            Lang
          </div>
          <div className="border h-full w-[10%] flex justify-center items-center">
            Signin
          </div>
          <div className="border h-full w-[5%] flex justify-center items-center">
            Order
          </div>
          <div className="border h-full w-[5%] flex justify-center items-center">
            Cart
          </div>
        </div>
      </header>

      <nav className="bg-primary text-gray-100">
        <ul className="h-10 flex justify-evenly items-center">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="relative border-[1px] rounded-sm border-transparent hover:border-white p-1 transition-all ease-in-out flex items-center"
            >
              {menu === "All" && <VscThreeBars className="h-6 w-6 pe-1" />}
              <Link to="/" className="block">
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default App;

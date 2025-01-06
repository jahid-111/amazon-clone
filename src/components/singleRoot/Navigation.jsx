import { useState } from "react";
import { menuItems } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import SideNavigation from "./SideNavigation";
import { useFilteredNavItems } from "../../hooks/useFilteredNavItem";

export default function Navigation() {
  const filteredMenuItems = useFilteredNavItems(menuItems).filter(
    (menu) => menu !== "All" // Remove "All" from menu items
  );
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div>
      <nav className="bg-primary text-gray-100 min-w-[920px]">
        <ul className="h-10 flex justify-around items-center list-none">
          {/* Three Bars Button */}
          <li className="relative border-[1px] h-9 w-auto rounded-sm border-transparent hover:border-white hover:text-gray-200 transition-all ease-in-out flex items-center">
            <button
              onClick={() => setOpenSideNav((prev) => !prev)}
              className="flex items-center space-x-2"
            >
              <VscThreeBars className="h-6 w-6" />
              <span className="text-sm">All</span>
            </button>
          </li>

          {/* Remaining Menu Items */}
          {filteredMenuItems.map((menu, index) => (
            <li
              key={index}
              className="relative border-[1px] h-9 w-auto rounded-sm border-transparent hover:border-white transition-all ease-in-out flex items-center"
            >
              <Link to="/" className="block">
                <span className="text-sm p-1">{menu}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Backdrop for Side Navigation */}
      <div
        className={`fixed inset-0 z-10 transition-opacity duration-300 ${
          openSideNav
            ? "bg-black bg-opacity-80 visible opacity-100"
            : "opacity-0 invisible"
        }`}
        onClick={() => setOpenSideNav(false)}
      ></div>

      {/* Side Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-20 transition-transform duration-500 ${
          openSideNav
            ? "transform translate-x-0 "
            : "transform -translate-x-full"
        }`}
      >
        <SideNavigation onClose={() => setOpenSideNav(false)} />
      </div>
    </div>
  );
}

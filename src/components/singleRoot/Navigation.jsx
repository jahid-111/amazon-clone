import { useState, useEffect } from "react";
import { menuItems } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import SideNavigation from "./SideNavigation";

export default function Navigation() {
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);
  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const breakpoints = [1435, 1395, 1210, 1175, 1065, 985, 940];
      const newFilteredMenuItems = breakpoints.reduce((acc, bp, index) => {
        if (window.matchMedia(`(max-width: ${bp}px)`).matches) {
          return menuItems.slice(0, -(index + 1));
        }
        return acc;
      }, menuItems);

      setFilteredMenuItems(newFilteredMenuItems);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <nav className="bg-primary text-gray-100">
        <ul className="h-10 flex justify-evenly items-center">
          {filteredMenuItems.map((menu, index) => (
            <li
              key={index}
              className="relative border-[1px] h-9 w-auto rounded-sm border-transparent hover:border-white p-1 transition-all ease-in-out flex items-center"
            >
              {menu === "All" && (
                <button onClick={() => setOpenSideNav((prev) => !prev)}>
                  <VscThreeBars className="h-6 w-6 bg-red-400" />
                </button>
              )}
              <Link to="/" className="block">
                <span className="text-sm">{menu}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed inset-0 z-10 transition-opacity duration-300 ${
          openSideNav
            ? "bg-black bg-opacity-80 visible opacity-100"
            : "opacity-0 invisible"
        }`}
        onClick={() => setOpenSideNav(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 w-[27rem] z-20 transition-transform duration-700 ${
          openSideNav
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <SideNavigation onClose={() => setOpenSideNav(false)} />
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { menuItems } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

export default function Navigation() {
  const [filteredMenuItems, setFilteredMenuItems] = useState(menuItems);

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

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-primary text-gray-100">
      <ul className="h-10 flex justify-evenly items-center">
        {filteredMenuItems.map((menu, index) => (
          <li
            key={index}
            className="relative border-[1px] h-9 w-auto rounded-sm border-transparent hover:border-white p-1 transition-all ease-in-out flex items-center"
          >
            {menu === "All" && <VscThreeBars className="h-6 w-6" />}
            <Link to="/" className="block">
              <span className="text-sm">{menu}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

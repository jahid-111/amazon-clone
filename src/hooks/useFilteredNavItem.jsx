import { useState, useEffect } from "react";

export const useFilteredNavItems = (menuItems) => {
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

    handleResize(); // Call on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [menuItems]);

  return filteredMenuItems;
};

import { useEffect, useRef } from "react";

export default function useSearchStyle() {
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const blurElement = document.getElementById("main");
    const handleFocus = () => {
      if (searchRef.current) {
        searchRef.current.style.border = "2px solid #ff9933";
        searchRef.current.style.borderTopLeftRadius = "4px";
        searchRef.current.style.borderBottomLeftRadius = "4px";
      }
      if (blurElement) {
        blurElement.style.filter = "blur(2px)";
        blurElement.style.opacity = 0.9;
      }
    };
    const handleClickOutside = (event) => {
      if (
        blurElement &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        blurElement.style.filter = "none";
      }
    };
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", handleFocus);
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("focus", handleFocus);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return { inputRef, searchRef };
}

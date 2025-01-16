import useScrollToVisible from "../hooks/useScrollToVisible";
import Header from "./singleRoot/Header";
import Navigation from "./singleRoot/Navigation";

export default function HeaderMain() {
  const { isVisible } = useScrollToVisible();
  return (
    <div id="header" className="fixed top-0 w-full z-50">
      <Header />

      {/* NAVIGATOR */}
      <div
        className={`transition-all duration-500 ${
          isVisible
            ? "opacity-100 translate-y-0 delay-300"
            : "opacity-0 translate-y-[-20px] delay-0" // No delay when hidden
        }`}
      >
        <Navigation />
      </div>
    </div>
  );
}

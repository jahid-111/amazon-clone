import "./App.css";

import Navigation from "./components/singleRoot/Navigation";
import Header from "./components/singleRoot/Header";
import SliderAuto from "./components/reUseComponents/SliderAuto";
import useScrollToVisible from "./hooks/useScrollToVisible";
import SellPrimaryCard from "./components/cards/SellPrimaryCard";

function App() {
  const { isVisible } = useScrollToVisible();
  // console.log(isVisible);
  return (
    <section className=" ">
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">
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

      <main
        id="main"
        className="pt-[4rem] relative flex justify-center items-start min-w-[920px]"
      >
        {/* HERO SECTION */}
        <div className="mx-0  xl:mx-24 mt-8">
          <SliderAuto />
        </div>
        {/* Content Section */}
        <section className="absolute top-80 mx-auto  min-w-[920px]">
          <div className=" grid grid-cols-3 2xl:grid-cols-4 gap-7 ">
            {[...Array(8)].map((c, card) => (
              <SellPrimaryCard key={card} />
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;

import "./App.css";

import Navigation from "./components/singleRoot/Navigation";
import Header from "./components/singleRoot/Header";
import SliderAuto from "./components/reUseComponents/SliderAuto";
import useScrollToVisible from "./hooks/useScrollToVisible";
import SellPrimaryCard from "./components/cards/SellPrimaryCard";
import ScrollHrCard from "./components/cards/ScrollHrCard";
import HorizontalScroll from "./components/reUseComponents/HorizontalScroll";

function App() {
  const { isVisible } = useScrollToVisible();

  return (
    <section>
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

      <main id="main" className="relative mt-24">
        {/* HERO SECTION */}
        <div className="h-[40rem] xl:mx-24">
          <SliderAuto />
        </div>

        {/* Content Section */}
        <section className="absolute border flex flex-col justify-around items-center top-64 w-full px-2">
          <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-7 xl:mx-28">
            {[...Array(8)].map((c, card) => (
              <SellPrimaryCard key={card} />
            ))}
          </div>

          {/* HR Scroll Products */}
          <div className="relative w-full xl:w-10/12 mx-0 lg:mx-24 px-2 lg:px-0">
            <h3 className="text-2xl font-semibold my-2">
              Top picks on children books from SAR 6
            </h3>
            <HorizontalScroll>
              {[...Array(16)].map((_, index) => (
                <ScrollHrCard key={index} />
              ))}
            </HorizontalScroll>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;

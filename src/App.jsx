import "./App.css";

import Navigation from "./components/singleRoot/Navigation";
import Header from "./components/singleRoot/Header";
import SliderAuto from "./components/reUseComponents/SliderAuto";

function App() {
  return (
    <section className="">
      <Header />
      <Navigation />

      <main id="main">
        <div className=" mx-24">
          <SliderAuto />
        </div>
      </main>
    </section>
  );
}

export default App;

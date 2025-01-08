import "./App.css";

import Navigation from "./components/singleRoot/Navigation";
import Header from "./components/singleRoot/Header";
import SliderAuto from "./components/reUseComponents/SliderAuto";
import useScrollToVisible from "./hooks/useScrollToVisible";
import SellPrimaryCard from "./components/cards/SellPrimaryCard";
import ScrollHrCard from "./components/cards/ScrollHrCard";
import HorizontalScroll from "./components/reUseComponents/HorizontalScroll";
import { Link } from "react-router-dom";

function App() {
  const { isVisible } = useScrollToVisible();

  return (
    <section>
      {/* Fixed Header */}
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

      <main id="main" className="relative mt-24 xl:w-11/12 mx-auto">
        {/* HERO SECTION */}
        <div className="h-[40rem]">
          <SliderAuto />
        </div>

        {/* Content Section */}
        <section className="absolute flex flex-col items-center top-64 w-full px-2 ">
          {/* Common Parent Container for Consistent Width */}
          <div className="w-full xl:max-w-screen-2xl p-4">
            {/* Cards Grid */}
            <div className="w-full  mb-4">
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                {[...Array(8)].map((_, card) => (
                  <SellPrimaryCard key={card} />
                ))}
              </div>
            </div>

            {/* Horizontal Scroll Section */}
            <div className="w-full bg-gray-100 px-2 mt-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                Top picks on children books from SAR 6
              </h3>

              <HorizontalScroll>
                {[...Array(16)].map((_, index) => (
                  <ScrollHrCard
                    imageClass="w-32 h-56 cursor-pointer"
                    key={index}
                  />
                ))}
              </HorizontalScroll>
            </div>

            {/* Cards Grid */}
            <div className="w-full mb-4 mt-7">
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                {[...Array(4)].map((_, card) => (
                  <SellPrimaryCard key={card} />
                ))}
              </div>
            </div>
            {/* Horizontal Scroll Section */}
            <div className="w-full bg-gray-100 px-2 mt-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                Top picks on children books from SAR 6
              </h3>

              <HorizontalScroll>
                {[...Array(16)].map((_, index) => (
                  <ScrollHrCard
                    imageClass="w-32 h-56 cursor-pointer"
                    key={index}
                  />
                ))}
              </HorizontalScroll>
            </div>

            {/* Cards Grid */}
            <div className="w-full mb-4 mt-7">
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                {[...Array(4)].map((_, card) => (
                  <SellPrimaryCard key={card} />
                ))}
              </div>
            </div>
            {/* Horizontal Scroll Section */}
            <div className="w-full bg-gray-100 px-2 mt-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                Top picks on children books from SAR 6
              </h3>

              <HorizontalScroll>
                {[...Array(16)].map((_, index) => (
                  <ScrollHrCard
                    imageClass="w-32 h-56 cursor-pointer"
                    key={index}
                  />
                ))}
              </HorizontalScroll>
            </div>

            {/* Cards Grid */}
            <div className="w-full mb-4 mt-7">
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                {[...Array(4)].map((_, card) => (
                  <SellPrimaryCard key={card} />
                ))}
              </div>
            </div>
            {/* Horizontal Scroll Section */}
            <div className="w-full bg-gray-100 px-2 mt-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                Top picks on children books from SAR 6
              </h3>

              <HorizontalScroll>
                {[...Array(16)].map((_, index) => (
                  <ScrollHrCard
                    imageClass="w-32 h-56 cursor-pointer"
                    key={index}
                  />
                ))}
              </HorizontalScroll>
            </div>

            {/* Cards Grid */}
            <div className="w-full mb-4 mt-7">
              <div className="grid grid-cols-3 xl:grid-cols-4 gap-7 place-items-stretch">
                {[...Array(4)].map((_, card) => (
                  <SellPrimaryCard key={card} />
                ))}
              </div>
            </div>

            {/* Horizontal Scroll Section */}
            <div className="w-full bg-gray-100 px-2 mt-7">
              <h3 className="text-2xl font-semibold text-start pt-4 pb-1">
                Top picks on children books from SAR 6
              </h3>

              <HorizontalScroll>
                {[...Array(16)].map((_, index) => (
                  <ScrollHrCard
                    imageClass="w-32 h-56 cursor-pointer"
                    key={index}
                  />
                ))}
              </HorizontalScroll>
            </div>

            {/* LAST ELEMENT */}

            <div className="absolute -left-16 -right-16 bg-white py-4 -mx-2 mt-10">
              <hr className=" border-gray-500 border" />
              {/* Centered Content */}
              <div className="w-full px-4 mx-auto">
                {/* Horizontal Scroll Section */}
                <div className=" bg-red-200 py-32">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores minus quam impedit rem provident, est adipisci placeat
                  aspernatur! Quidem, quam! Nam excepturi voluptatibus, eum
                  consequuntur deserunt dolorem blanditiis ab nobis. Sit tempora
                  perferendis eaque corporis quia cupiditate temporibus tenetur
                  odit voluptatem repellat nostrum enim quaerat commodi
                  aspernatur cumque dicta labore eveniet illum non, consequatur
                  fugiat! Deserunt officiis accusantium facere tenetur, error
                  non dolores quaerat possimus aut voluptatum tempora iure
                  tempore minima cumque cum fugiat hic nesciunt aspernatur
                  labore! Quasi, reiciendis ducimus! Quae similique magni sit
                  porro fugit vitae aliquid fugiat. Dignissimos sapiente facere
                  earum vero blanditiis ad. Culpa, veniam ratione eius, labore
                  beatae quis ab accusamus odio, animi molestiae quasi
                  recusandae corrupti eaque quas illum assumenda fugiat fuga
                  cupiditate laudantium voluptate nam! Harum accusamus ab quos
                  odio quae mollitia, ducimus aut vel dignissimos temporibus
                  tempora voluptas suscipit. Ea soluta necessitatibus, quo
                  praesentium, aliquam consectetur obcaecati, molestiae
                  architecto recusandae ipsa repudiandae. Sint voluptates quasi
                  nisi quis voluptas tempore alias eligendi neque eaque
                  nesciunt, veniam delectus! Voluptatibus cumque alias iste
                  amet. Molestias dolores, ipsa, repudiandae nobis pariatur quis
                  alias nihil a earum quasi harum eos voluptatibus praesentium
                  illo veniam quas expedita voluptas ad, minima repellat quaerat
                  deserunt rem tenetur ea! Illo sit iusto ea officiis non.
                  Soluta dicta optio natus voluptatum mollitia architecto fuga
                  aliquid eius consequatur reiciendis? Asperiores, a, inventore
                  eaque enim quos doloremque fugiat, non error et suscipit
                  aliquam. Possimus nostrum quisquam nulla non blanditiis labore
                  veritatis neque veniam odit unde excepturi recusandae rerum
                  nisi velit illum, similique provident pariatur ipsa ullam
                  vitae esse? Molestiae nisi quidem enim qui? Earum id saepe
                  expedita illo esse soluta. Aliquid aliquam, facere voluptatum
                  perspiciatis commodi error ipsum quasi amet rerum distinctio
                  hic debitis corporis eos accusamus autem, minima dolorum.
                  Quibusdam itaque dolorum quaerat. Dolorum aperiam maxime
                  doloremque numquam itaque veritatis temporibus a dolores.
                </div>
                <hr className=" border-gray-500 border   w-11/12 mx-auto" />
                <div className=" bg-green-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores minus quam impedit rem provident, est adipisci placeat
                  aspernatur! Quidem, quam! Nam excepturi voluptatibus, eum
                  consequunt recusandae corrupti eaque quas illum assumenda
                  fugiat fuga cupiditate laudantium voluptate nam! Harum
                  accusamus ab quos quaerat deserunt rem tenetur ea! Illo sit
                  iusto ea officiis non. Soluta dicta optio natus voluptatum
                  mollitia architecto fuga aliquid eius consequatur reiciendis?
                  Asperiores, a, inventore eaque enim quos doloremque fugiat,
                  non error et suscipit aliquam. Possimus nostrum quisquam nulla
                  non blanditiis labore veritatis neque veniam odit unde
                  excepturi recusandae rerum nisi velit illum, similique
                  provident pariatur ipsa ullam vitae esse? Molestiae nisi
                  quidem enim qui? Earum id saepe expedita illo esse soluta.
                  Aliquid aliquam, facere voluptatum perspiciatis commodi error
                  ipsum quasi amet rerum distinctio hic debitis corporis eos
                  accusamus autem, minima dolorum. Quibusdam itaque dolorum
                  quaerat. Dolorum aperiam maxime doloremque numquam itaque
                  veritatis temporibus a dolores.
                </div>
                <hr className=" border-gray-500 border" />
                <Link
                  className=" bg-slate-700 text-gray-100 hover:bg-slate-600 font-semibold w-full  block text-center py-2"
                  to={"#header"}
                >
                  Back to Top
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default App;

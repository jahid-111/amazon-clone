import ProdDetailsDisplayCard from "../../components/cards/ProdDetailsDisplayCard";
import InputRadio from "../../components/radioSelect/InputRadio";

export default function TodaysDeals() {
  return (
    <div>
      <div className="flex justify-center xl:w-10/12 mx-auto px-3">
        <div className="w-2/12 ">
          <InputRadio />
        </div>
        <div className="border w-10/12 ">
          <div className=" grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
            {[...Array(34)].map((item, i) => (
              <ProdDetailsDisplayCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { PricingFilter } from "../../components/radioSelect/PricinFilter";
import { RatingFilter } from "../../components/radioSelect/RatingsFilter";

export default function TodaysDeals() {
  return (
    <div>
      <div className="flex justify-center xl:w-11/12 mx-auto">
        <div className="border w-3/12 ">
          <RatingFilter />
          {/* <PricingFilter/> */}
        </div>
        <div className="border w-9/12 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quos
          distinctio magni eum harum quibusdam, accusantium quasi est ullam odio
          repellendus laudantium culpa voluptatibus osfficia natus laboriosam et
          nam labore!
        </div>
      </div>
    </div>
  );
}

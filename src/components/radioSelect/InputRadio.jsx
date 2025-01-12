import RadioForm from "../formComponent/radioFrom/RadioFrom";
import DepartmentCategory from "./DepartmentCategory";
import RatingsFilter from "./RatingsFilter";
import PriceFilter from "./PricingFilter";
import DiscountFilter from "./DiscountFilter";

export default function InputRadio({ type }) {
  return (
    <div className="sticky top-1">
      <RadioForm>
        <DepartmentCategory />
        <RatingsFilter />
        <PriceFilter />
        <DiscountFilter />
      </RadioForm>
    </div>
  );
}

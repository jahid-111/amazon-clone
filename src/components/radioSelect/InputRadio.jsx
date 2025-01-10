import RadioForm from "../formComponent/radioFrom/RadioFrom";
import DepartmentCategory from "./DepartmentCategory";
import RatingsFilter from "./RatingsFilter";
import PriceFilter from "./PricingFilter";
import DiscountFilter from "./DiscountFilter";

export default function InputRadio() {
  return (
    <>
      <RadioForm>
        <DepartmentCategory />
        <RatingsFilter />
        <PriceFilter />
        <DiscountFilter />
      </RadioForm>
    </>
  );
}

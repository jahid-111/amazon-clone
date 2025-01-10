import useRadioForm from "../../hooks/useRadioFrom";

export default function DiscountFilter() {
  const { value, onChange } = useRadioForm();
  const priceOptions = [
    { label: "10% off or more", value: "10%" },
    { label: "25% off or more", value: "20%" },
    { label: "50% off or more", value: "40%" },
    { label: "70% off or more", value: "70%" },
  ];

  // console.log(value);

  return (
    <div className="pb-2">
      <h3 className="text-[1rem] text-black font-bold ">Price Filter</h3>
      <div className="flex flex-col text-black rounded-md">
        {/* "All" Option */}
        <label className="flex items-center">
          <input
            type="radio"
            name="price"
            id="all"
            value="All"
            checked={value === "All"}
            onChange={onChange}
            className="cursor-pointer"
          />
          <span className="ml-2">All</span>
        </label>

        {/* Price Options */}
        {priceOptions.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name="price"
              value={option.value}
              checked={value === option.value}
              onChange={onChange} // Handle the price selection
              className="cursor-pointer"
            />
            <span className="ml-2 ">{option.label}</span>
          </label>
        ))}
        <div className=" h-5">
          {value && (
            <p className="text-gray-800">
              Selected Discount : <span className="font-semibold">{value}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

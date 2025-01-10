import useRadioForm from "../../hooks/useRadioFrom";

const PriceFilter = () => {
  const { value, onChange } = useRadioForm();
  const priceOptions = [
    { label: "Under SAR 100", value: "Under 100" },
    { label: "Under SAR 200", value: "Under 200" },
    { label: "Under SAR 400", value: "Under 400" },
    { label: "Under SAR 800", value: "Under 800" },
    { label: "SAR 800 & above", value: "Above 800+" },
  ];

  console.log(value);

  return (
    <div className=" pb-2">
      <h3 className="text-[1rem] text-black font-bold">Price Filter</h3>
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
        <div className="h-5">
          {value && (
            <p className="text-gray-800">
              Selected Price: <span className=" font-semibold">{value}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;

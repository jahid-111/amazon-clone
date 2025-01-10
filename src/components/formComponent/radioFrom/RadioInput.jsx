export default function PriceFilter({ name, value, checked, onChange }) {
  const priceOptions = [
    { label: "Under SAR 100", value: "under100" },
    { label: "Under SAR 200", value: "under200" },
    { label: "Under SAR 400", value: "under400" },
    { label: "Under SAR 800", value: "under800" },
    { label: "SAR 800 & above", value: "above800" },
  ];

  return (
    <div className=" flex flex-col">
      {priceOptions.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

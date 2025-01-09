import RatingsRadio from "../reUseComponents/RatingsRadio";

const priceOptions = [
  { label: "Under SAR 100" },
  { label: "Under SAR 200" },
  { label: "Under SAR 400" },
  { label: "Under SAR 800" },
  { label: "SAR 800 & above" },
];

export function PricingFilter() {
  const handleRatingChange = (rating) => {
    console.log("Selected Rating:", rating);
  };

  return (
    <div className="App">
      <h1>Ratings Filter</h1>
      <RatingsRadio
        options={priceOptions}
        onRatingChange={handleRatingChange}
      />
    </div>
  );
}

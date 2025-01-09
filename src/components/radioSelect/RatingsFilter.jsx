import RatingsRadio from "../reUseComponents/RatingsRadio";

const ratingOptions = [
  { label: "5 Stars", stars: 5 },
  { label: "4 Stars", stars: 4 },
  { label: "3 Stars", stars: 3 },
  { label: "2 Stars", stars: 2 },
  { label: "1 Star", stars: 1 },
];

export function RatingFilter() {
  const handleRatingChange = (rating) => {
    console.log("Selected Rating:", rating);
  };

  return (
    <div className="App">
      <h1>Ratings Filter</h1>
      <RatingsRadio
        options={ratingOptions}
        onRatingChange={handleRatingChange}
      />
    </div>
  );
}

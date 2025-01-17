export default function SpecificationsProduct({ product }) {
  const specifications = Object.keys(product)

    .filter(
      (key) =>
        key !== "features" &&
        key !== "price" &&
        key !== "color" &&
        key !== "photos" &&
        key !== "marketing"
    )
    .map((key) => {
      let value = product[key];
      if (Array.isArray(value)) {
        value = value.join(", ");
      }
      return {
        label: key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase()),
        value: value.toString(),
      };
    });

  // console.log(specifications);
  return (
    <div className="flex flex-col gap-1 mt-3">
      {specifications.map((specific) => (
        <div key={specific?.label} className="flex items-center gap-5">
          <div className="w-40 inline-block text-start">
            <strong className="text-xs">{specific?.label}</strong>
          </div>
          <div className="">
            <h6 className="text-xs font-medium">{specific?.value}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

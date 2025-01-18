export default function VariantProduct({
  product,
  allProduct,
  onSelectStorage,
  onSelectColor,
}) {
  console.log(product?.current?.color);

  return (
    <div>
      {/* Storage Selection */}
      <div className="flex items-center gap-2 text-xs mt-2">
        <p>Size:</p>
        <strong>{product?.screenSize}</strong>
      </div>

      <div className="flex gap-3 mt-2">
        {allProduct.map((storage) => (
          <button
            key={storage?.storage}
            onClick={() => onSelectStorage(storage?.storage)} // Trigger callback
            className={`px-2 py-1 rounded-lg border-2 ${
              product?.current?.storage === storage?.storage
                ? "border-blue" // Active button styles
                : "hover:bg-gray-100 hover:border-blue" // Inactive hover styles
            }`}
          >
            {storage.storage}
          </button>
        ))}
      </div>

      {/* Color Selection */}
      <div className="flex items-center gap-2 text-xs mt-2">
        <p>Colors:</p>
      </div>
      <div className="flex justify-start items-center gap-2 mt-2">
        {/* Uncomment and customize for color selection */}
        {allProduct.map((color) => (
          <button
            onClick={() => onSelectColor(color?.color)}
            key={color?.color}
            className={`border rounded-md ${
              product?.current?.color === color?.color
                ? "border-blue"
                : "hover:border"
            }`}
          >
            <div
              style={{ backgroundColor: color?.color }}
              className={`h-8 w-8 rounded-full ${
                product?.current?.color === color?.color
                  ? "border border-blue"
                  : ""
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}

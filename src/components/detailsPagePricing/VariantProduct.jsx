export default function VariantProduct({
  product,
  allProduct,
  onSelectStorage,
  onSelectColor,
}) {
  // console.log(product);
  // console.log(product?.storage);

  return (
    <div>
      {/* Storage Selection */}

      <div className="flex items-center gap-2 text-xs mt-2">
        <p>Size: </p>
        <strong>{product?.screenSize}</strong>
      </div>

      <div className="flex gap-3 mt-2">
        {allProduct?.map((storage) => (
          // console.log(product?.storage),
          <button
            onClick={() => {
              // setSelectedStorage(storage.storage); // Update selected storage
              onSelectStorage(storage?.storage); // Trigger callback
            }}
            key={storage?.storage}
            className={`border-2 px-2 py-1 rounded-lg ${
              product?.storage === storage?.storage
                ? "border-blue"
                : "hover:bg-gray-100 hover:border-blue"
            }`}
          >
            {storage.storage}
          </button>
        ))}
      </div>
      {/* Color Selection */}
      <div className="flex items-center gap-2 text-xs mt-2">
        <p>Colors: </p>
        <strong>{product?.colour}</strong>
      </div>
      <div className=" flex justify-start items-center gap-2 mt-2">
        {allProduct.map((color) => (
          // console.log(product?.color),
          <button
            onClick={() => {
              onSelectColor(color?.color);
            }}
            key={color?.color}
            className={`border rounded-md ${
              product?.color === color?.color
                ? "border-blue"
                : "hover:border-blue-500"
            }`}
          >
            <div
              style={{ backgroundColor: color?.color }}
              className={`h-8 w-8 rounded-full ${
                product?.color === color?.color
                  ? "border-2 border-blue-500"
                  : ""
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function VariantProduct({
  allProduct,
  onSelectStorage,
  onSelectColor,
}) {
  // console.log(allProduct);
  return (
    <div>
      <div className=" flex items-center gap-2 text-xs mt-2">
        <p>Size : </p>
        <strong> 1 TB</strong>
      </div>
      <div className="flex gap-3 mt-2">
        {allProduct.map((storage) => (
          // console.log(storage),
          <button
            onClick={() => onSelectStorage(storage.storage)}
            key={storage?.storage}
            className=" border-2 hover:bg-gray-100 hover:border-blue px-2  py-1 rounded-lg"
          >
            {storage.storage}
          </button>
        ))}
      </div>

      {/* COLOR */}
      <div className=" flex items-center gap-2 text-xs mt-2">
        <p>Color : </p>
        <strong> White Titanium </strong>
      </div>
      <div className=" flex justify-start items-center gap-2 mt-2">
        {allProduct?.map(
          (color) => (
            console.log(color.color),
            (
              <button
                onClick={() => onSelectColor(color?.color)}
                key={color?.colour}
                className=" border rounded-md"
              >
                <div
                  style={{ backgroundColor: color?.color }}
                  className="h-8 w-8 bg-green-400 rounded-full"
                ></div>
              </button>
            )
          )
        )}
      </div>
    </div>
  );
}

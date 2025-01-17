import { useState } from "react";

export default function VariantProduct({
  product,
  allProduct,
  onSelectStorage,
  onSelectColor,
}) {
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div>
      {/* Storage Selection */}

      <div className="flex items-center gap-2 text-xs mt-2">
        <p>Size: </p>
        <strong>{product?.screenSize}</strong>
      </div>

      <div className="flex gap-3 mt-2">
        {allProduct.map((storage) => (
          <button
            onClick={() => {
              setSelectedStorage(storage.storage); // Update selected storage
              onSelectStorage(storage.storage); // Trigger callback
            }}
            key={storage?.storage}
            className={`border-2 px-2 py-1 rounded-lg ${
              selectedStorage === storage.storage
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
        <p>Color: </p>
        <strong>White Titanium</strong>
      </div>
      <div className="flex justify-start items-center gap-2 mt-2">
        {allProduct.map((color) => (
          <button
            onClick={() => {
              setSelectedColor(color?.color); // Update selected color
              onSelectColor(color?.color); // Trigger callback
            }}
            key={color?.color}
            className={`border rounded-md ${
              selectedColor === color?.color
                ? "border-blue"
                : "hover:border-blue-500"
            }`}
          >
            <div
              style={{ backgroundColor: color?.color }}
              className={`h-8 w-8 rounded-full ${
                selectedColor === color?.color ? "border-2 border-blue-500" : ""
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}

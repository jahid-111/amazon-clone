import { useState } from "react";
import detailsProducts from "../../../utils/dummyData/detailsProducts";
import AboutDetailsProduct from "../detailsPagePricing/AboutDetailsProduct";
import MainPrice from "../detailsPagePricing/MainPrice";
import PriceHeading from "../detailsPagePricing/PriceHeading";
import SpecificationsProduct from "../detailsPagePricing/SpecificationsProduct";
import VariantProduct from "../detailsPagePricing/VariantProduct";

export default function SpecificationProduct() {
  const data = detailsProducts;

  const [product, setProduct] = useState(data[0]);

  //   console.log(data);
  //   console.log(product);

  function handleSelectStorage(storage) {
    // console.log(storage);
    const selectedStorage = data.find((product) => product.storage === storage);
    if (selectedStorage) {
      setProduct(selectedStorage);
    }
    // console.log(selectedProduct);
  }

  function handleSelectColor(color) {
    console.log(color);
    const selectedColor = data.find((product) => product.color === color);
    if (selectedColor) {
      setProduct(selectedColor);
    }
  }
  return (
    <>
      <PriceHeading product={product} />

      {/* PRICE */}
      <MainPrice product={product} />
      <div className="text-xs font-semibold">
        <p>Size 128</p>
        <p>Style Iphone</p>
      </div>
      <VariantProduct
        onSelectStorage={handleSelectStorage}
        onSelectColor={handleSelectColor}
        product={product}
        allProduct={data}
      />

      {/* Specification */}

      <SpecificationsProduct product={product} />
      {/* ABOUT ITEMS */}
      <div className=" mt-5">
        <AboutDetailsProduct product={product} />
      </div>
      {/* Product SELLER image   */}
      <div>
        <img
          className=" w-96 h-30"
          src="https://m.media-amazon.com/images/G/40/Apple/River/AuthorizedReseller_Black_EN_800x190_ME._CB572981095_.jpg"
          alt="apple"
        />
      </div>
    </>
  );
}

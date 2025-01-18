import { useState } from "react";
import detailsProducts from "../../../utils/dummyData/detailsProducts";
import AboutDetailsProduct from "../detailsPagePricing/AboutDetailsProduct";
import MainPrice from "../detailsPagePricing/MainPrice";
import PriceHeading from "../detailsPagePricing/PriceHeading";
import SpecificationsProduct from "../detailsPagePricing/SpecificationsProduct";
import VariantProduct from "../detailsPagePricing/VariantProduct";

export default function SpecificationProduct({
  allProduct,
  test,
  onLoadProduct,
}) {
  // console.log(test.current?.photos[1]?.allPhotos[1]);

  const data = detailsProducts;

  const [product, setProduct] = useState(test);

  function handleSelectStorage(storage) {
    // Find the selected product based on the storage
    const selectedStorage = allProduct.find(
      (product) => product.storage === storage
    );
    // console.log(selectedStorage);

    if (selectedStorage) {
      // Pass the selectedStorage as the new 'current' product to onLoadProduct
      console.log(selectedStorage?.photos);
      onLoadProduct({
        current: selectedStorage,
        photo: selectedStorage?.photos,
      });
    }
  }

  function handleSelectColor(color) {
    console.log(color);
    const selectedColor = product.find((product) => product.color === color);
    if (selectedColor) {
      setProduct(selectedColor);
    }
  }
  return (
    <>
      <PriceHeading product={test.current} />

      {/* PRICE */}
      <MainPrice product={test.current} />

      <VariantProduct
        onSelectStorage={handleSelectStorage}
        onSelectColor={handleSelectColor}
        product={test}
        allProduct={data}
      />

      {/* Specification */}

      <SpecificationsProduct product={test.current} />
      {/* ABOUT ITEMS */}
      <div className=" mt-5">
        <AboutDetailsProduct product={test.current} />
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

import { useState } from "react";
import ProductMultiPhoto from "./ProductMultiPhoto";
import SelectedDetails from "./SelectedDetails";
import { productImage } from "../../../utils/phoneStaticData";

export default function ProductViewer() {
  const [selectedPhoto, setSelectedPhoto] = useState({
    photo: productImage[0],
    index: 0,
  });

  function handleClickToView(id) {
    const selected = productImage.find((img, index) => index === id);
    setSelectedPhoto({ photo: selected, index: id });
  }

  // console.log(selectedPhoto.index);
  return (
    <>
      {/* MULTI PHOTO DISPLAY */}
      <div className="mx-auto w-1/12">
        <div className="flex flex-col justify-center items-center gap-1">
          {productImage.map((img, id) => (
            <ProductMultiPhoto
              key={id}
              img={img}
              id={id}
              onViewPhoto={handleClickToView}
              isSelected={selectedPhoto?.index === id}
            />
          ))}
        </div>
      </div>

      {/* SELECTED PHOTO */}
      <div className="w-11/12 mx-auto">
        {/* Pass selected photo details to SelectedDetails */}
        <SelectedDetails photo={selectedPhoto?.photo} />
      </div>
    </>
  );
}

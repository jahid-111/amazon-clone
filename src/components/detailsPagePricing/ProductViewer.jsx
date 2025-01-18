import { useState } from "react";
import ProductMultiPhoto from "./ProductMultiPhoto";
import SelectedDetails from "./SelectedDetails";

export default function ProductViewer({ product, onLoadProduct }) {
  // State for selected photo
  const [selectedPhoto, setSelectedPhoto] = useState({
    photo: product.photos[1].allPhotos[0], // Default to the first photo
    index: 0,
  });

  // Handle clicking on a photo to update the selected photo
  function handleClickToView(id) {
    const selected = product.photos[1].allPhotos[id];
    if (selected) {
      setSelectedPhoto({ photo: selected, index: id });
    }
  }

  return (
    <>
      {/* MULTI PHOTO DISPLAY */}
      <div className="mx-auto w-1/12">
        <div className="flex flex-col justify-center items-center gap-1">
          {product?.photos[1].allPhotos.map((img, id) => (
            <ProductMultiPhoto
              key={id}
              img={img}
              id={id}
              onViewPhoto={handleClickToView} // Pass the click handler
              isSelected={selectedPhoto.index === id} // Highlight the selected photo
            />
          ))}
        </div>
      </div>

      {/* SELECTED PHOTO */}
      <div className="w-11/12 mx-auto">
        {/* Pass selected photo details to SelectedDetails */}
        <SelectedDetails photo={selectedPhoto.photo} />
      </div>
    </>
  );
}

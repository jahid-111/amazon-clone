import { productImage } from "../../../utils/phoneStaticData";

export default function ProductMultiPhoto() {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {productImage.map((img, index) => (
        <div
          key={index}
          className="border border-gray-300 hover:border-4 hover:border-blue rounded-md py-1 transition-all duration-200 ease-in cursor-pointer box-border"
        >
          <img
            className="h-12 w-8 m-1"
            src={img}
            alt={`product image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

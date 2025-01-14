import { productImage } from "../../../utils/phoneStaticData";

export default function ProductMultiPhoto() {
  return (
    <div className=" flex flex-col justify-center items-center gap-1">
      {productImage.map((img, index) => (
        <div
          key={index}
          className=" border-[3px] rounded-md py-1 hover:border-blue cursor-pointer"
        >
          <img
            className=" h-12 w-8 m-1"
            src={img}
            alt={`product image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

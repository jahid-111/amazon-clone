import { aboutDetailsProduct } from "../../../utils/phoneStaticData";

export default function AboutDetailsProduct() {
  return (
    <div>
      <h5 className=" text-pretty font-semibold text-black">About this item</h5>
      <ul className="flex flex-col w-[30rem] list-disc pl-5">
        {aboutDetailsProduct.map((details, index) => (
          <li key={index} className="list-item text-sm font-medium text-black">
            {details}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { aboutDetailsProduct } from "../../../utils/phoneStaticData";

export default function AboutDetailsProduct() {
  return (
    <div>
      <ul className="flex flex-col w-[30rem] list-disc pl-5">
        {aboutDetailsProduct.map((details, index) => (
          <li key={index} className="list-item text-sm font-medium">
            {details}
          </li>
        ))}
      </ul>
    </div>
  );
}

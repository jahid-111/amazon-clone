import { LiaFlagUsaSolid } from "react-icons/lia";
import { languages } from "../../../utils/staticUserData";

export default function Language() {
  return (
    <div className=" h-full w-[7%] flex justify-center items-center p-2 ">
      <button className=" flex justify-center items-center hover:border ">
        <LiaFlagUsaSolid className="text-gray-300" />
        <select
          id="All"
          className="p-1 bg-transparent w-auto text-gray-200 hover:text-gray-450 font-bold rounded-s-sm"
        >
          {languages.map((item) => (
            <option key={item.code} value={item}>
              {item.code}
            </option>
          ))}
        </select>
      </button>
    </div>
  );
}

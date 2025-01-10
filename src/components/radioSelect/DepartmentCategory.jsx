import { useState } from "react";
import { amazonDepartments } from "../../../utils/staticUserData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import useRadioForm from "../../hooks/useRadioFrom";

export default function DepartmentCategory() {
  const departmentInit = amazonDepartments.slice(0, 3);
  const [showAll, setShowAll] = useState(false);
  const { value, onChange } = useRadioForm();

  return (
    <div className="pb-2">
      <h3 className="text-[1rem] text-black font-bold">Department</h3>
      <div className="flex flex-col justify-center  text-black rounded-md">
        {/* "All" dept */}

        {/* Price Options */}
        {(showAll ? amazonDepartments : departmentInit).map((dept) => (
          <label key={dept} className="flex items-center flex-shrink-0">
            <input
              type="radio"
              name="price"
              value={dept}
              checked={value === dept}
              onChange={onChange} // Handle the price selection
              className="cursor-pointer"
            />
            <span className="ml-2 ">{dept}</span>
          </label>
        ))}
        <div className="">
          {value && (
            <p className="text-gray-800">
              Selected Price: <span className=" font-semibold">{value}</span>
            </p>
          )}
        </div>
        <button
          className=""
          onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
        >
          {showAll ? (
            <span className="flex justify-start items-start gap-1">
              <FaChevronUp /> See less
            </span>
          ) : (
            <span className="flex justify-start items-start gap-1">
              <FaChevronDown />
              See More
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

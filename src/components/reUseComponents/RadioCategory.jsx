import { useState } from "react";
import { amazonDepartments } from "../../../utils/staticUserData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function RadioCategory() {
  const radioInitial = amazonDepartments.slice(0, 3);
  const [showAll, setShowAll] = useState(false);
  const [value, setValue] = useState();

  function handleRadioValue(value) {
    console.log(value);
    setValue(value);
  }

  return (
    <div>
      <ul>
        <h4 className=" font-semibold">Department</h4>
        {(showAll ? amazonDepartments : radioInitial).map((dept) => (
          <li key={dept}>
            <input
              onChange={() => handleRadioValue(dept)}
              type="radio"
              id={dept}
              name="category"
              value={dept}
              checked={value === dept}
            />
            <label htmlFor={dept}>{dept}</label>
          </li>
        ))}
      </ul>
      <button
        className=""
        onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
      >
        {showAll ? (
          <span className="flex justify-center items-center gap-1">
            <FaChevronUp /> See less
          </span>
        ) : (
          <span className="flex justify-center items-center gap-1">
            <FaChevronDown />
            See all
          </span>
        )}
      </button>
    </div>
  );
}

import { FaAngleRight } from "react-icons/fa6";
import { programsFeatures } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";

export default function ProgramFeatureNav() {
  return (
    <div className="border-b pb-2 border-gray-300">
      <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
        Programs and Feature
      </h3>
      <ul className="flex flex-col justify-center items-center w-full">
        {programsFeatures.map((program) => (
          <li key={program} className="w-full">
            <Link
              className=" hover:bg-gray-300 w-full block h-10 flex items-center "
              to="/"
            >
              <div className="flex justify-between items-center w-full px-10">
                <p className="font-semibold text-sm">{program}</p>
                <FaAngleRight />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

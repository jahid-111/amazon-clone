import { FaAngleRight } from "react-icons/fa6";
import { digitalContents } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";

export default function DigitalContentNav() {
  return (
    <div className="border-b pb-2 border-gray-300">
      <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
        Digital content and devices
      </h3>
      <ul className="flex flex-col justify-center items-center w-full">
        {digitalContents.map((digital) => (
          <li key={digital} className="w-full">
            <Link
              className=" hover:bg-gray-300 w-full block h-10 flex items-center "
              to="/"
            >
              <div className="flex justify-between items-center w-full px-10">
                <p className="font-semibold text-sm">{digital}</p>
                <FaAngleRight />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { trendingSideBar } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";

export default function TrendingNav() {
  return (
    <div className="border-b pb-2 border-gray-300">
      <h3 className="text-xl font-semibold mx-10 text-start my-3  ">
        Trending
      </h3>
      <ul className="flex flex-col justify-center items-center w-full">
        {trendingSideBar.map((trend) => (
          <li key={trend} className="w-full">
            <Link
              className=" hover:bg-gray-300 w-full block h-10 flex items-center "
              to="/"
            >
              <span className="mx-10 font-semibold text-sm">{trend}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

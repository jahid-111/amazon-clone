import { IoIosSearch } from "react-icons/io";
import { searchCategory } from "../../../utils/staticUserData";

import useSearchStyle from "../../hooks/useSearchStyle";

export default function SearchBar() {
  const { inputRef, searchRef } = useSearchStyle(); //Clean Component to use Hook
  return (
    <div className="flex-grow h-full flex justify-center items-center">
      <div
        ref={searchRef}
        className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg border-2"
      >
        <select
          id="All"
          className="p-1 border-r bg-white w-auto text-gray-600 hover:text-gray-950 rounded-s-sm"
        >
          {searchCategory.map((item) => (
            <option className="bg-green-500" key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          ref={inputRef}
          className="w-full p-2 outline-none font-semibold text-gray-700"
          type="text"
          placeholder="Search Amazon"
          aria-label="Search Amazon"
        />
        <button className="rounded-r-md px-4 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600">
          <IoIosSearch className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}

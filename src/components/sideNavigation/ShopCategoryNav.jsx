// import { useState } from "react";
// import { FaAngleRight, FaChevronDown, FaChevronUp } from "react-icons/fa6";
// import { shopByCategory } from "../../../utils/staticUserData";
// import { Link } from "react-router-dom";

// export default function ShopCategoryNav() {
//   const [showAll, setShowAll] = useState(false);
//   const initialCategories = shopByCategory.slice(0, 3);

//   return (
//     <div className="border-b pb-2 border-gray-300">
//       <h3 className="text-xl font-semibold mx-10 text-start my-3">
//         Shop by Category
//       </h3>
//       <ul className="flex flex-col justify-center items-center w-full">
//         {(showAll ? shopByCategory : initialCategories).map((category) => (
//           <li key={category} className="w-full">
//             <Link
//               className="hover:bg-gray-300 w-full block h-10 flex items-center"
//               to="/"
//             >
//               <div className="flex justify-between items-center w-full px-10">
//                 <p className="font-semibold text-sm">{category}</p>
//                 <FaAngleRight />
//               </div>
//             </Link>
//           </li>
//         ))}
//         <li className="w-full">
//           <button
//             className=" font-semibold"
//             onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
//           >
//             {showAll ? (
//               <span>
//                 See less <FaChevronUp />
//               </span>
//             ) : (
//               <span>
//                 See all <FaChevronDown />
//               </span>
//             )}
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }

import { useState } from "react";
import { FaAngleRight, FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { shopByCategory } from "../../../utils/staticUserData";
import { Link } from "react-router-dom";

export default function ShopCategoryNav() {
  const [showAll, setShowAll] = useState(false);
  const initialCategories = shopByCategory.slice(0, 3);

  return (
    <div className="border-b pb-2 border-gray-300">
      <h3 className="text-xl font-semibold mx-10 text-start my-3">
        Shop by Category
      </h3>
      <ul className="flex flex-col justify-center items-center w-full">
        {(showAll ? shopByCategory : initialCategories).map((category) => (
          <li key={category} className="w-full">
            <Link
              className="hover:bg-gray-300 w-full block h-10 flex items-center transition ease-in-out duration-300"
              to="/"
            >
              <div className="flex justify-between items-center w-full px-10">
                <p className="font-semibold text-sm">{category}</p>
                <FaAngleRight />
              </div>
            </Link>
          </li>
        ))}
        <li className="w-full">
          <button
            className="font-semibold w-full h-10 text-xs flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition ease-in-out duration-300 rounded-b"
            onClick={() => setShowAll((prevShowAll) => !prevShowAll)}
          >
            {showAll ? (
              <span className="flex items-center gap-1">
                See less <FaChevronUp />
              </span>
            ) : (
              <span className="flex items-center gap-1">
                See all <FaChevronDown />
              </span>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

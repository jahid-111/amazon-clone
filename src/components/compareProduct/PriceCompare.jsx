import { compareProduct } from "../../../utils/phoneStaticData";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

// Function to convert camelCase to space-separated and capitalize first letter
const formatHeader = (header) => {
  const spacedHeader = header.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spacedHeader.charAt(0).toUpperCase() + spacedHeader.slice(1);
};

export default function PriceCompare() {
  const data = compareProduct;
  const headers = Object.keys(data[0]);

  return (
    <div className="flex flex-col justify-center mx-auto xl:w-11/12 px-2 my-10">
      {headers.map((header, index) => (
        <div key={index} className="flex w-full">
          <div className="w-[15%] h-auto flex p-1 border">
            <h3 className="font-medium text-start text-black">
              {formatHeader(header)}
            </h3>
          </div>
          <div className="w-[85%] flex flex-wrap">
            {data.map((item, idx) => (
              <div key={idx} className={`w-[25%] p-1 border font-medium`}>
                {header === "photo" ? (
                  <img
                    src={item[header]}
                    alt={item.name}
                    className=" mx-auto h-[90%] w-[90%]"
                  />
                ) : typeof item[header] === "boolean" ? (
                  item[header] ? (
                    <IoMdCheckmark className="text-green-700 h-8 w-8 inline-block" />
                  ) : (
                    <IoMdClose className="text-red-700 h-8 w-8 inline-block" />
                  )
                ) : (
                  <span
                    className={
                      header === "price"
                        ? "text-red-700 font-medium text-2xl"
                        : ""
                    }
                  >
                    {Array.isArray(item[header])
                      ? item[header].join(", ")
                      : item[header].toString()}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

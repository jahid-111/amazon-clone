import { compareProduct } from "../../../utils/phoneStaticData";
const formatHeader = (header) => {
  const spacedHeader = header.replace(/([a-z])([A-Z])/g, "$1 $2");
  return spacedHeader.charAt(0).toUpperCase() + spacedHeader.slice(1);
};
export default function PriceCompare() {
  const data = compareProduct;
  const headers = Object.keys(data[0]);
  //   console.log(data.length);

  return (
    <div className="flex flex-col justify-center mx-auto border">
      {headers.map((header, index) => (
        <div key={index} className="flex gap-3  w-full">
          <div className="w-[15%] h-auto flex items-center ps-2 bg-green-400 border">
            <h3 className="font-medium text-start">{formatHeader(header)}</h3>
          </div>
          <div className="w-[85%] flex flex-wrap bg-pink-300">
            {data.map((item, idx) => (
              <div key={idx} className="w-[25%] p-2 border">
                {Array.isArray(item[header])
                  ? item[header].join(", ")
                  : item[header].toString()}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

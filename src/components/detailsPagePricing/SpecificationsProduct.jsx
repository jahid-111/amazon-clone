import { specifications } from "../../../utils/phoneStaticData";

export default function SpecificationsProduct() {
  return (
    <div className="flex flex-col gap-1 mt-3">
      {specifications.map((specific) => (
        <div key={specific.label} className="flex items-center gap-5">
          <div className="w-40 inline-block text-start">
            <strong className="text-xs">{specific.label}</strong>
          </div>
          <div className="">
            <h6 className=" text-xs font-medium">{specific.value}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

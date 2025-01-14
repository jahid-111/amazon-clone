import { specifications } from "../../../utils/phoneStaticData";

export default function SpecificationsProduct() {
  return (
    <div className="flex flex-col gap-1 mt-5">
      {specifications.map((specific) => (
        <div key={specific.label} className="flex items-center gap-5">
          <div className="w-40 h-auto inline-block text-start">
            <strong>{specific.label}</strong>
          </div>
          <div className="flex-grow p-2">
            <h6>{specific.value}</h6>
          </div>
        </div>
      ))}
    </div>
  );
}

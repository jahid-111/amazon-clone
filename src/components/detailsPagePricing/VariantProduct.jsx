export default function VariantProduct() {
  return (
    <div>
      <div className="flex gap-3 mt-2">
        <button className=" border px-2  py-1 rounded-lg">1TB</button>
        <button className=" border px-2  py-1 rounded-lg">256GB</button>
        <button className=" border px-2  py-1 rounded-lg">512TB</button>
      </div>

      {/* COLOR */}
      <div className=" flex justify-start items-center gap-2 mt-2">
        <div className=" h-8 w-8 bg-green-400 rounded-full border"></div>
        <div className=" h-8 w-8 bg-gray-400 rounded-full border"></div>
        <div className=" h-8 w-8 bg-white rounded-full border"></div>
        <div className=" h-8 w-8 bg-black rounded-full border"></div>
      </div>
    </div>
  );
}

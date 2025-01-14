export default function TradingAddCart() {
  return (
    <div className="hover:bg-gray-300 border-b pb-2">
      <div className=" px-2">
        <div className=" flex justify-between items-center ">
          <h6 className="font-bold">With Trade-in</h6>
          <input type="radio" />
        </div>
        <p className="text-start text-sm font-bold text-orange-600">
          Save upto SAR 1,760.00
        </p>
        <p className=" mt-5 text-xs font-medium">
          Get Instant discount with Trade-In
        </p>
      </div>
    </div>
  );
}

import { FaInfo } from "react-icons/fa";

export default function MainPrice() {
  return (
    <>
      <div className=" flex gap-4 pt-2">
        <h4 className=" text-orange-500 text-2xl"> - 7%</h4>
        <h2 className=" text-4xl font-semibold">
          <sup>SAR</sup> 5,299<sup>00</sup>
        </h2>
      </div>

      <div className="pt-2">
        <p className=" mt-2">
          List Price: SAR5,699.00
          <FaInfo className=" inline-block  border rounded-full text-xs" />
        </p>
        <p>All prices include VAT. Size: 256 GB</p>
      </div>
    </>
  );
}

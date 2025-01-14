import { FaRegStar, FaStar } from "react-icons/fa";

export default function RatingStar() {
  return (
    <>
      <div className=" flex justify-start items-center gap-3">
        <div className=" flex  items-center justify-center gap-[2px]">
          {[...Array(4)].map((star, i) => (
            <FaStar className=" h-5 w-5 text-yellow" key={i} />
          ))}
          <FaRegStar className="h-5 w-5 text-yellow" />
        </div>
        <h6 className=" text-xl  font-medium">4.1 out of 5</h6>
      </div>
      <p className=" my-3 text-sm font-medium">183 global ratings</p>
    </>
  );
}

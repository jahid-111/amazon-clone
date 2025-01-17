export default function AboutDetailsProduct({ product }) {
  // console.log(product);
  return (
    <div>
      <h5 className=" text-pretty font-semibold text-black">About this item</h5>
      <ul className="flex flex-col w-[30rem] list-disc pl-5">
        {product?.features.map((details, index) => (
          <li key={index} className="list-item text-sm font-medium text-black">
            {details}
          </li>
        ))}
      </ul>
    </div>
  );
}

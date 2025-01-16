import { productCover } from "../../../utils/phoneStaticData";

export default function ProductCoverImages() {
  return (
    <div className=" ">
      {productCover.map((coverImg) => (
        <img key={coverImg} src={coverImg} />
      ))}
    </div>
  );
}

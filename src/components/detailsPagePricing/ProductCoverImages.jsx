import { productCover } from "../../../utils/phoneStaticData";

export default function ProductCoverImages() {
  return (
    <div>
      {productCover.map((coverImg) => (
        <img key={coverImg} src={coverImg} />
      ))}
    </div>
  );
}

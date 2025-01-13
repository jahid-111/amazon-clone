export default function ScrollHrCard({ imageClass, isHeading, headName }) {
  return (
    <div className="">
      <div>
        <img
          className={imageClass}
          src="/images/sliderImage/slider_four.png"
          alt=""
        />
      </div>
      {isHeading && (
        <h6 className=" text-sm font-medium text-center my-2">
          Name of Category - {headName + 1}
        </h6>
      )}
    </div>
  );
}

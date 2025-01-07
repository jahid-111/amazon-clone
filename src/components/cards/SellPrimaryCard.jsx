export default function SellPrimaryCard() {
  return (
    <div className="w-auto max-w-[21rem] h-[26rem] p-2 relative bg-white shadow-md rounded-sm">
      {/* Title */}
      <h3 className="text-xl font-bold mb-4">
        Shop Amazon Private Brands starting from SAR 10
      </h3>

      {/* Image Container */}
      <div className="w-full h-[16rem] border mx-auto overflow-hidden">
        <img
          src="/images/sliderImage/slider_four.png"
          alt="Slider"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Button */}
      <div className="absolute bottom-6 left-0">
        <button className="bg-blue-500  px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Shop all
        </button>
      </div>
    </div>
  );
}

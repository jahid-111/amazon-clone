import { Link } from "react-router-dom";

export default function SellPrimaryCard() {
  return (
    <div className="w-auto max-w-[21rem] h-[26rem] p-2 relative bg-gray-100 shadow-md rounded-sm">
      {/* Title */}
      <h3 className="text-xl font-bold mb-4">
        Shop Amazon Private Brands starting from SAR 10
      </h3>

      {/* Image Container */}
      <div className="w-full h-[16rem] border mx-auto overflow-hidden">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/40/Electronics/Store/kamja/Stores/GamingCorner/2404DR16_3_GamingCorner_AE_SA_GW_DC_753x608._SY608_CB554227644_.jpg"
          alt="Slider"
          className="object-cover"
        />
      </div>

      {/* Button */}
      <div className="absolute bottom-6 left-0">
        <Link to="product/id" className="sell-primary-button">
          Shop all
        </Link>
        {/* <button className=""></button> */}
      </div>
    </div>
  );
}

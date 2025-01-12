import {
  arrivalsProduct,
  dealsDiscount,
  electricBrands,
  productCategories,
  sellerName,
} from "../../../utils/electricStaticData";
import { Link } from "react-router-dom";
import { conditionProducts } from "../../../utils/staticUserData";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function SideNav() {
  return (
    <div>
      <div>
        <h5 className=" font-semibold ">Category</h5>
        <h5 className=" font-semibold ms-2">Electronics</h5>
      </div>
      <div className=" ms-4 border">
        {/* ELECTRIC Category */}
        <ul className="">
          {productCategories.map((electric, i) => (
            <li className=" text-sm font-medium" key={i}>
              <Link
                to={`/electronics/${electric}`}
                className="hover:text-orange-400"
              >
                {electric}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Section two */}
      <div className=" ms-2">
        {/* BRAND */}
        <ul className="my-4">
          <fieldset>
            <legend>
              <span className="font-semibold">Brands</span>
            </legend>
            <div className=" flex flex-col justify-around items-start ">
              {electricBrands.map((brand) => (
                <div key={brand}>
                  <input type="checkbox" name={brand} id={brand} />
                  <label htmlFor="">{brand}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </ul>
        {/* CONDITION */}
        <ul className="my-2">
          <h5 className=" font-semibold">Condition</h5>
          {conditionProducts.map((electric, i) => (
            <li className=" text-sm font-medium" key={i}>
              <Link
                to={`/electronics/${electric}`}
                className="hover:text-orange-400"
              >
                {electric}
              </Link>
            </li>
          ))}
        </ul>
        {/* STAR Review */}
        <div>
          <h5 className=" font-semibold my-1"> Customer Reviews</h5>
          <ul>
            <Link className="flex justify-start items-center gap-1">
              {[...Array(4)].map((star) => (
                <FaStar key={star} className=" text-yellow" />
              ))}
              <FaRegStar className="text-yellow" />{" "}
              <span className=" text-xs">& Up</span>
            </Link>
          </ul>
        </div>
        {/* DEALS price */}
        <div>
          <ul className="my-2">
            <h5 className=" font-semibold">Deals & Discounts</h5>
            {dealsDiscount.map((electric, i) => (
              <li className=" text-sm font-medium" key={i}>
                <Link
                  to={`/electronics/${electric}`}
                  className="hover:text-orange-400"
                >
                  {electric}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* DEALS price */}
        <div>
          <ul className="my-2">
            <h5 className=" font-semibold">Deals & Discounts</h5>
            {arrivalsProduct.map((electric, i) => (
              <li className=" text-sm font-medium" key={i}>
                <Link
                  to={`/electronics/${electric}`}
                  className="hover:text-orange-400"
                >
                  {electric}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* SELLER  */}
        <ul className="my-4">
          <fieldset>
            <legend>
              <span className="font-semibold">Brands</span>
            </legend>
            <div className=" flex flex-col justify-around items-start ">
              {sellerName.map((brand) => (
                <div key={brand} className=" hover:text-orange-400">
                  <input type="checkbox" name={brand} id={brand} />
                  <label htmlFor="">{brand}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </ul>
      </div>
    </div>
  );
}

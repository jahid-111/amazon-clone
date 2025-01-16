import BackToTop from "./reUseComponents/BackToTop";
import {
  aboutUs,
  helpAndSupport,
  makeMoneyWithUs,
  shopWithUs,
} from "../../utils/staticUserData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <BackToTop />
      <div className=" mx-auto text-gray-200 ">
        {/* TOP Footer */}
        <div className="flex gap-5 justify-center items-center">
          <div className=" min-h-80  w-72 my-10 p-7 ">
            <h5 className="font-bold text-white mb-2">Get To know Us</h5>
            <ul className="flex flex-col justify-center items-start">
              {aboutUs.map((link) => (
                <li key={link} className=" font-">
                  <Link to={"/"} className=" hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" min-h-80  w-72 my-10 p-7">
            <h5 className="font-bold text-white mb-2">Shop With Us</h5>
            <ul className="flex flex-col justify-center items-start yes">
              {shopWithUs.map((link) => (
                <li key={link} className=" font-">
                  <Link to={"/"} className=" hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" min-h-80  w-72 my-10 p-7">
            <h5 className="font-bold text-white mb-2">Make Money with Us</h5>
            <ul className="flex flex-col justify-center items-start yes">
              {makeMoneyWithUs.map((link) => (
                <li key={link} className=" font-">
                  <Link to={"/"} className=" hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" min-h-80  w-72 my-10 p-7">
            <h5 className="font-bold text-white mb-2">Let Us Help You</h5>
            <ul className="flex flex-col justify-center items-start yes">
              {helpAndSupport.map((link) => (
                <li key={link} className=" font-">
                  <Link to={"/"} className=" hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* BOTTOM Footer */}
        <div className=" bg-gray-900">
          <p className=" text-center py-3">
            ©1996–2025, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
}

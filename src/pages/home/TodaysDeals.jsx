import { Link } from "react-router-dom";
import {
  aboutUs,
  helpAndSupport,
  makeMoneyWithUs,
  shopWithUs,
} from "../../../utils/staticUserData";
import ProdDetailsDisplayCard from "../../components/cards/ProdDetailsDisplayCard";
import InputRadio from "../../components/radioSelect/InputRadio";
import HorizontalScroll from "../../components/reUseComponents/HorizontalScroll";
import DetailsPriceCard from "../../components/cards/DetailsPriceCard";

export default function TodaysDeals() {
  return (
    <div className="">
      <section className="flex justify-center xl:w-10/12 mx-auto px-3">
        <div className="w-2/12">
          <InputRadio />
        </div>
        <div className="border w-10/12 ">
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {[...Array(34)].map((item, i) => (
              <ProdDetailsDisplayCard key={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="">
        {/* Horizontal Scroll Section */}
        <section className=" mx-auto px-4">
          <h6 className=" text-xl font-semibold ps-10">
            Inspired by your browsing history
          </h6>
          <HorizontalScroll>
            <section className="flex justify-between gap-3 overflow-x-auto py-8 px-8">
              {[...Array(16)].map((_, index) => (
                <DetailsPriceCard key={index} />
              ))}
            </section>
          </HorizontalScroll>
          <hr className="border-gray-500 w-11/12 mx-auto" />
          {/* AUTH CONTENT*/}
          <section className="py-4 px-4">
            <div className=" flex flex-col gap-2 justify-center items-center">
              <h4 className="text-2xl font-semibold text-gray-700">
                See personalized recommendations
              </h4>
              <button className=" bg-[#f7dc2e] py-1 px-28 rounded-full">
                <span className=" text-gray-600"> Signin</span>
              </button>
              <p className=" text-xs">
                <span className=" font-semibold"> New customer? </span>
                <Link to={"/"} className=" text-blue underline">
                  Start here.
                </Link>
              </p>
            </div>
          </section>
          <hr className="border-gray-500 my-3" />
        </section>
        {/* Footer */}
        <footer className="bg-primary">
          <button className=" block text-center w-full bg-slate-700 hover:bg-slate-600 text-gray-200 py-4 text-xs font-semibold">
            BACK TO TOP
          </button>
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
                <h5 className="font-bold text-white mb-2">
                  Make Money with Us
                </h5>
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
      </div>
    </div>
  );
}

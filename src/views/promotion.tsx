import Image from "next/image";
import React from "react";
import pro1 from "/public/assets/pro1.webp";
import pro2 from "/public/assets/pro2.webp";
import pro3 from "/public/assets/pro3.webp";

export default function Promotion() {
  return (
    <div>
      {/*Heading*/}
      <div className="text-blue-600 text-center mb-5 font-semibold">
        {" "}
        PROMOTIONS
      </div>
      <div className="text-center mb-20">
        <h1 className="scroll-m-20  text-xl text-black font-extrabold tracking-tight lg:text-3xl">
          Our Promotions Events
        </h1>
        <div className=" mt-2  justify-center flex  ">
          <div className="w-20 h-1 rounded-full bg-gray-900 inline-flex" />
        </div>
      </div>

      <div className="flex space-x-5">
        <div className=" space-y-3">
          <div className="flex bg-purple-100 px-6 ">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 pt-6">
                GET UP TO 60%
              </h2>
              <p className="text-black">For the summer season</p>
            </div>
            <Image src={pro1} alt="" width={300} height={300} />
          </div>

          <div className="flex flex-col items-center bg-slate-900 p-6 pb-20">
            <h2 className="text-3xl font-extrabold py-6 text-white">
              GET 30% Off
            </h2>
            <p className="text-white pb-1">USE PROMO CODE</p>
            <button className="text-white bg-slate-700 px-8 py-2 font-bold rounded">
              DINE WEEKEND SALE
            </button>
          </div>
        </div>

        <div className="bg-pink-100">
          <p className="text-black px-8 py-6 whitespace-pre">
            Flex Sweatshirt
            <br />
            <span className="line-through">$100.00</span>
            <span className=" font-semibold text-xl"> $75.00</span>
          </p>

          <Image src={pro2} alt="" width={300} height={300} />
        </div>

        <div className="bg-purple-100">
          <p className="text-black px-8 py-6 whitespace-pre">
            Flex Push Button Bomber
            <br />
            <span className="line-through">$225.00</span>
            <span className=" font-semibold text-xl"> $190.00</span>
          </p>
          <Image src={pro3} alt="" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}

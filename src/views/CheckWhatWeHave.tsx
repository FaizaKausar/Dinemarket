import Image from "next/image";
import ProductCard from "@/componentz/productCard";
import cwwh from "/public/cwwh.png";
import cwwh2 from "/public/cwwh2.png";
import cwwh4 from "/public/cwwh4.png";
import React from "react";
export default function CheckWhatWeHave() {
  return (
    <div>
      {/*Heading*/}
      <div className="text-blue-600 text-center mb-5 mt-20 font-semibold">
        {" "}
        PRODUCTS
      </div>
      <div className="text-center mb-20">
        <h1 className="scroll-m-20  text-xl text-black font-extrabold tracking-tight lg:text-3xl">
          Check What We Have
        </h1>
        <div className=" mt-2  justify-center flex  ">
          <div className="w-20 h-1 rounded-full bg-gray-900 inline-flex" />
        </div>
      </div>

      <div></div>

      <div className="flex flex-row justify-center items-center ">
        <div>
          <Image src={cwwh} alt="" width={400} height={400} />
          <h3 className=" text-lg font-semibold">Brushed Raglan Sweatshirt</h3>
          <p className="text-lg font-semibold">$195</p>
        </div>
        <div>
          <Image src={cwwh2} alt="" width={400} height={400} />
          <h3 className="text-lg font-semibold">Cameryn Sash Tie Dress</h3>
          <p className="text-lg font-semibold">$545</p>
        </div>
        <div>
          <Image src={cwwh4} alt="" width={400} height={400} />
          <h3 className="text-lg font-semibold">Flex Sweatshirtt</h3>
          <p className="text-lg font-semibold">$175</p>
        </div>
      </div>
    </div>
  );
}

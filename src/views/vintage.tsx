import Image from "next/image";
import unique from "/public/assets/unique.webp";
import React from "react";

export default function Vintage() {
  return (
    <div className="bg-zinc-50">
      {/* main div */}
      <div className="m-[120px]  p-1  text-gray-900 ">
        {/* upper div */}
        <div className=" text-4xl md:text-5xl flex justify-start md:justify-end font-bold md:font-bold py-4  ">
          <h3 className=" tracking-normal   max-w-[449px]">
            Unique and Authentic Vintage Designer Jewellery
          </h3>
        </div>

        {/* lower div */}
        <div className=" flex-col md:flex-row flex justify-between py-4 mt-2 gap-9 ">
          {/* left div */}
          <div className=" relative grid gap-12 grid-cols-2 grid-rows-2  basis-1/2">
            <div className=" absolute inset-0 -z-50 text-slate-100">
              <h6 className=" text-5xl md:text-7xl lg:text-[7.5rem] leading-[5.9rem] font-bold">
                Different from others
              </h6>
            </div>

            {/* 1st div */}
            <div className=" max-w-[13rem] space-y-2">
              <h6 className=" font-semibold text-xl">
                Using Good Quality Materials
              </h6>
              <p className=" text-lg leading-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            {/* 2nd div */}
            <div className=" max-w-[13rem] space-y-2">
              <h6 className=" font-semibold text-xl">100% Handmade Products</h6>
              <p className=" text-lg leading-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            {/* 3rd div */}
            <div className=" max-w-[13rem] space-y-2">
              <h6 className=" font-semibold text-xl">Modern Fashion Design</h6>
              <p className=" text-lg leading-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            {/* 4th div */}
            <div className=" max-w-[13rem] space-y-2">
              <h6 className=" font-semibold text-xl">
                Discount for Bulk Orders
              </h6>
              <p className=" text-lg leading-6">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* right div */}
          <div className=" basis-1/2 flex flex-col lg:flex-row">
            <div className="lg:w-72 w-full px-4 lg:px-0">
              <Image src={unique} alt="Image" width={1000} height={1000} />
            </div>
            <div className=" space-y-6 md:space-y-4 p-4">
              <p className="text-base lg:max-w-[14rem] h-[80%] tracking-normal">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className=" text-white bg-gray-900 border-gray-600 rounded-none py-2 px-6 w-1/2">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import { LucideShoppingCart } from "lucide-react";
import hero from "/public/assets/hero.webp";
import logo1 from "/public/assets/logo1.webp";
import logo2 from "/public/assets/logo2.webp";
import logo3 from "/public/assets/logo3.webp";
import logo4 from "/public/assets/logo4.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex  sm:flex-col lg:flex-row gap-y-10 py-8">
      {/* Left Div */}
      <div className="flex-1">
        <Badge className="px-6 py-3 rounded-xl bg-blue-100 text-blue-700 ">
          Sale 70%
        </Badge>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <Button className="bg-black h-15 px-8 mt-6 text-white rounded-xl  ">
          <LucideShoppingCart size={25} className="mr-3" />
          Start Shopping
        </Button>
        <div>
          <ul className="flex flex-row gap-4 mt-8">
            <li>
              {" "}
              <Image src={logo1} alt="logo" width={100} height={100} />{" "}
            </li>
            <li>
              {" "}
              <Image src={logo2} alt="logo" width={100} height={100} />{" "}
            </li>
            <li>
              {" "}
              <Image src={logo3} alt="logo" width={100} height={100} />{" "}
            </li>
            <li>
              {" "}
              <Image src={logo4} alt="logo" width={100} height={100} />{" "}
            </li>
          </ul>
        </div>
      </div>

      {/* Right Div */}
      <div className="flex  flex-1 mt-8 md:m-0 rounded-full  bg-pink-100">
        <div className="">
          <Image src={hero} alt="Image" />
        </div>
      </div>
    </section>
  );
}

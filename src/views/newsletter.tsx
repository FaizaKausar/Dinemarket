import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Newsletter = () => {
  return (
    <div className=" text-center grid relative py-10">
      <h3 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
        Subscribe Our Newsletter
      </h3>
      <p className="text-lg md:text-xl font-light py-4">
        Get the latest information and promo offers directly
      </p>

      <div className="flex  justify-center">
        <Input
          type="text"
          placeholder="Input email address"
          className="w-52 h-8 md:w-[300px] md:h-10 mx-2"
        />
        <Button className="bg-gray-950 border-l-2 border-t-2 border-gray-600 w-28 h-8 md:w-32 md:h-10 mx-2 text-white font-medium md:font-bold">
          Get Started
        </Button>
        <div className="absolute -z-10 text-center text-gray-100 font-bold text-7xl -mt-16 md:text-9xl md:-mt-24">
          Newsletter
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

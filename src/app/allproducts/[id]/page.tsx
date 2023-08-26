import Image from "next/image";
import { Productz } from "@/utils/mock";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import { StaticImageData } from "next/image";
import Quantity from "@/componentz/Quantity";

const getProductsDetail = (id: number | string) => {
  return Productz.filter((product) => product.id == id);
};
const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className=" flex justify-evenly flex-wrap mt-16 py-10">
      {result.map((product) => (
        <div key={product.id} className="flex justify-evenly gap-6">
          {/*Left Image */}
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          {/*Right Content */}
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className=" text-base text-gray-400 font-semibold">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="text-xs mt-8 font-semibold">SELECT SIZE</h3>
              {/*Sizes */}

              <div className=" flex gap-x-5">
                {sizes.map((item) => {
                  return (
                    <button
                      className="flex justify-center items-center w-8 h-8 mt-3 border duration-300 rounded-full 
              hover:shadow-xl"
                    >
                      <span className="text-[10px] font-semibold text-center text-gray-400">
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
              {/*Quantity*/}
              <div className="flex gap-x-3 mt-6 items-center">
                <h3 className="text-[15px] font-semibold">Quantity :</h3>
                <Quantity />
              </div>
              {/*Add To Cart*/}
              <div className="flex items-center mt-8 gap-x-5">
                <Button className="m-5 bg-black text-white font-bold rounded-lg">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <h2 className="text-2xl font-semibold">
                  $ {product.price.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

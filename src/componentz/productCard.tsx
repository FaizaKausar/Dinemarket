import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function ProductCard(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) {
  return (
    <Link href={`/allproducts/ ${props.id}`}>
      <div>
        <div className=" py-5">
          <Image src={props.img} alt="Image" width={400} height={400} />
          <h3 className="font-bold text-lg mt-3"> {props.title}</h3>
          <p className="font-bold text-lg"> ${props.price}</p>
          <p className="font-bold text-lg">
            Category:{"    "}
            <span className="text-base font-normal capitalize">
              {props.category}
            </span>
          </p>
        </div>
        <div>
          {/* <Button className="m-5 bg-black text-white font-bold rounded-lg">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button> */}
        </div>
      </div>
    </Link>
  );
}

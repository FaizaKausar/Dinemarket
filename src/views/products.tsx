import ProductCard from "@/componentz/productCard";
import { Productz } from "@/utils/mock";
import { StaticImageData } from "next/image";
import React from "react";

const Products = () => {
  return (
    <div className=" flex justify-evenly mt-16 py-10">
      {Productz.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default Products;

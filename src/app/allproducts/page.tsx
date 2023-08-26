import { Productz } from "@/utils/mock";
import ProductCard from "@/componentz/productCard";
import cwwh3 from "/public/cwwh3.png";
import { StaticImageData } from "next/image";
const AllProducts = () => {
  return (
    <div className=" flex justify-evenly flex-wrap mt-16 py-10">
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
export default AllProducts;

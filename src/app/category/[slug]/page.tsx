import ProductCard from "@/componentz/productCard";
import { Productz } from "@/utils/mock";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
  return Productz.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);
  return (
    <div className=" flex justify-evenly flex-wrap mt-16 py-10">
      {result.length > 0 ? (
        result.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))
      ) : (
        <p className="font-extraboldbold text-2xl text-red-600">
          No Products Found
        </p>
      )}
    </div>
  );
}

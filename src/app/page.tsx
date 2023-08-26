import { Button } from "@/components/ui/button";
import CheckWhatWeHave from "@/views/CheckWhatWeHave";

import Hero from "@/views/Hero";

import Products from "@/views/products";
import Promotions from "@/views/promotion";
import Vintage from "@/views/vintage";
import Newsletter from "@/views/newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <CheckWhatWeHave />
      <Vintage />

      {/*<Products />*/}
      <Newsletter />
    </div>
  );
}

import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { LucideShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BiSearch } from "react-icons/bi";
export default function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-6">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-40" />
      </Link>
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"/category/female"}>Female</Link>
        </li>

        <li className="text-lg">
          <Link href={"/category/male"}>Male</Link>
        </li>

        <li className="text-lg">
          <Link href={"/category/kids"}>Kids</Link>
        </li>

        <li className="text-lg">
          <Link href={"/allproducts"}>All Products</Link>
        </li>
      </ul>

      <div className="border flex items-center rounded-xl text-gray-600 px-3">
        <BiSearch />
        <Input
          type="text"
          className="pl-1 pr-5 py-1 w-60 rounded-xl"
          placeholder="What you looking for"
        />
      </div>

      <div className=" relative flex justify-center items-center rounded-full h-12 w-12 bg-gray-200">
        <div
          className="absolute flex justify-center rounded-full items-center bg-red-500
            w-4 h-4 top-1 right-2 text-sm text-white font-light"
        >
          5
        </div>
        <LucideShoppingCart size={25} />
      </div>
    </div>
  );
}

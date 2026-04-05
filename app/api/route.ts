import { NextResponse } from "next/server";
import { Products } from "@/src/features/interfaces/productInterface";
import Logo from "@/public/shop_logo.svg";
import Phone from "@/public/phone.png";

export async function GET() {
  const products: Products[] = [
    {
      id: 1,
      img: Logo.src,
      title: "iPhone",
      description: "Apple phone",
      price: 1000,
      discount: 50,
    },
    {
      id: 2,
      img: Phone.src,
      title: "Samsung",
      description: "Android phone",
      price: 800,
    },
  ];

  return NextResponse.json(products);
}

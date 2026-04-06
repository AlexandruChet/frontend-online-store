import { NextResponse } from "next/server";
import { Products } from "@/src/features/interfaces/productInterface";
import Logo from "@/public/shop_logo.svg";
import Phone from "@/public/phone.png";

export async function GET() {
  const products: Products[] = [
    {
      id: 1,
      img: Logo.src,
      title: "iPhone 15 Pro",
      description:
        "The ultimate iPhone featuring a strong and light titanium design with the new Action button.",
      price: 1200,
      discount: 10,
    },
    {
      id: 2,
      img: Phone.src,
      title: "Samsung Galaxy S24",
      description:
        "Experience a new level of mobile computing with Galaxy AI and a stunning Pro-grade camera.",
      price: 900,
      discount: 15,
    },
    {
      id: 3,
      img: Phone.src,
      title: "Google Pixel 8",
      description:
        "The helpful phone engineered by Google, with a camera that takes amazing photos and videos.",
      price: 700,
    },
    {
      id: 4,
      img: Phone.src,
      title: "Xiaomi 14 Ultra",
      description:
        "A professional optical leap forward with Leica Summilux lens and a 1-inch main sensor.",
      price: 1100,
      discount: 20,
    },
    {
      id: 5,
      img: Phone.src,
      title: "OnePlus 12",
      description:
        "Elite performance with up to 16GB of RAM and the fastest charging in the industry.",
      price: 850,
    },
    {
      id: 6,
      img: Phone.src,
      title: "Sony Xperia 1 V",
      description:
        "Unprecedented image quality with the next-generation sensor and a true 4K HDR OLED display.",
      price: 1300,
    },
    {
      id: 7,
      img: Phone.src,
      title: "Asus Zenfone 10",
      description:
        "Mighty on hand. A compact 5.9-inch smartphone that doesn't compromise on power or features.",
      price: 750,
      discount: 5,
    },
    {
      id: 8,
      img: Phone.src,
      title: "Nothing Phone (2)",
      description:
        "A new era of smartphone design with the unique Glyph Interface and sustainable materials.",
      price: 650,
    },
    {
      id: 9,
      img: Phone.src,
      title: "Motorola Edge 40",
      description:
        "Curved glass and a thin, light frame make it as comfortable as it is beautiful to look at.",
      price: 500,
      discount: 30,
    },
    {
      id: 10,
      img: Phone.src,
      title: "Huawei P60 Pro",
      description:
        "The King of mobile photography with XMAGE technology and an elegant Rococo Pearl finish.",
      price: 950,
    },
  ];

  return NextResponse.json(products);
}

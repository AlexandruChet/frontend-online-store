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
      catalog: "phone",
    },
    {
      id: 2,
      img: Phone.src,
      title: "MacBook Air M3",
      description:
        "Strikingly thin and fast, so you can work, play, or create anything — anywhere.",
      price: 1400,
      discount: 5,
      catalog: "laptop",
    },
    {
      id: 3,
      img: Phone.src,
      title: "Apple Watch Series 9",
      description:
        "Smarter, brighter, and mightier. Featuring the S9 SiP and a magical new way to use your watch.",
      price: 400,
      catalog: "watch",
    },
    {
      id: 4,
      img: Phone.src,
      title: "Sony WH-1000XM5",
      description:
        "Industry-leading noise canceling and magnificent sound with the new Integrated Processor V1.",
      price: 350,
      discount: 15,
      catalog: "audio",
    },
    {
      id: 5,
      img: Phone.src,
      title: "iPad Pro 11-inch",
      description:
        "The ultimate iPad experience with mind-blowing M2 performance and an ultra-advanced display.",
      price: 800,
      catalog: "tablet",
    },
    {
      id: 6,
      img: Phone.src,
      title: "ASUS ROG Zephyrus G14",
      description:
        "The world's most powerful 14-inch Windows 11 gaming laptop with Ryzen 9 processor.",
      price: 1600,
      catalog: "laptop",
    },
    {
      id: 7,
      img: Phone.src,
      title: "AirPods Pro (2nd Gen)",
      description:
        "Up to 2x more Active Noise Cancellation, plus Adaptive Transparency and Personalized Spatial Audio.",
      price: 250,
      discount: 10,
      catalog: "audio",
    },
    {
      id: 8,
      img: Phone.src,
      title: "Garmin Fenix 7X",
      description:
        "Rugged multisport GPS watch with solar charging, built-in flashlight, and long battery life.",
      price: 700,
      catalog: "watch",
    },
    {
      id: 9,
      img: Phone.src,
      title: "Keychron K2 V2",
      description:
        "A tactile wireless mechanical keyboard with the largest battery seen in a mechanical keyboard.",
      price: 100,
      discount: 20,
      catalog: "accessories",
    },
    {
      id: 10,
      img: Phone.src,
      title: "Samsung Galaxy Tab S9",
      description:
        "The new standard for premium tablets with a Dynamic AMOLED 2X display and S Pen included.",
      price: 850,
      catalog: "tablet",
    },
  ];

  return NextResponse.json(products);
}

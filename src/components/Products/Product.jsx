import React from "react";
import Home from "../Home/Home";
import { IoArrowBack, IoArrowForward, IoChevronForward } from "react-icons/io5";
import { PiHouseBold } from "react-icons/pi";
import Card from "./Card";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 738,
    currentPrice: 70,
    originalPrice: null,
    tag: "HOT",
    tagType: "hot",
  },
  {
    id: 2,
    name: "Samsung Electronics Samsung Galaxy S21 5G",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 536,
    currentPrice: 2300,
    originalPrice: null,
    tag: null,
  },
  {
    id: 3,
    name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6",
    image:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 423,
    currentPrice: 360,
    originalPrice: null,
    tag: "BEST DEALS",
    tagType: "deal",
  },
  {
    id: 4,
    name: "Portable Washing Machine, 11lbs capacity Model 18NMF",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
    rating: 4.0,
    reviews: 816,
    currentPrice: 80,
    originalPrice: null,
    tag: null,
  },
  {
    id: 5,
    name: "Wired Over-Ear Gaming Headphones with USB",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 647,
    currentPrice: 1500,
    originalPrice: null,
    tag: null,
  },
  {
    id: 6,
    name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    rating: 3.5,
    reviews: 877,
    currentPrice: 1200,
    originalPrice: 1600,
    tag: "25% OFF",
    tagType: "discount",
  },
  {
    id: 7,
    name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 426,
    currentPrice: 250,
    originalPrice: null,
    tag: null,
  },
  {
    id: 8,
    name: "4K UHD LED Smart TV with Chromecast Built-in",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400",
    rating: 4.0,
    reviews: 583,
    currentPrice: 220,
    originalPrice: null,
    tag: "SALE",
    tagType: "sale",
  },
  {
    id: 9,
    name: "MacBook Pro 16-inch M2 Max",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 120,
    currentPrice: 3500,
    originalPrice: null,
    tag: "HOT",
    tagType: "hot",
  },
  {
    id: 10,
    name: "Sony Alpha a7 IV Mirrorless Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 89,
    currentPrice: 2499,
    originalPrice: null,
    tag: null,
  },
  {
    id: 11,
    name: "Logitech MX Master 3S Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 2150,
    currentPrice: 99,
    originalPrice: null,
    tag: "BEST DEALS",
    tagType: "deal",
  },
  {
    id: 12,
    name: "Nintendo Switch – OLED Model",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 4300,
    currentPrice: 349,
    originalPrice: null,
    tag: "SALE",
    tagType: "sale",
  },
  {
    id: 13,
    name: "iPad Air M1 Chip 256GB",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 950,
    currentPrice: 749,
    originalPrice: 899,
    tag: "15% OFF",
    tagType: "discount",
  },
  {
    id: 14,
    name: "Bose QuietComfort 45 Wireless Noise Cancelling",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 1200,
    currentPrice: 329,
    originalPrice: null,
    tag: null,
  },
  {
    id: 15,
    name: "Kindle Paperwhite (16 GB)",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 5600,
    currentPrice: 149,
    originalPrice: null,
    tag: null,
  },
  {
    id: 16,
    name: "GoPro HERO11 Black",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    rating: 4.0,
    reviews: 320,
    currentPrice: 399,
    originalPrice: 499,
    tag: "20% OFF",
    tagType: "discount",
  },
  {
    id: 17,
    name: "PlayStation 5 Console",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 8900,
    currentPrice: 499,
    originalPrice: null,
    tag: "HOT",
    tagType: "hot",
  },
  {
    id: 18,
    name: "Apple Watch Series 8 GPS",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 1100,
    currentPrice: 399,
    originalPrice: null,
    tag: null,
  },
  {
    id: 19,
    name: "Dyson V15 Detect Cordless Vacuum",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 670,
    currentPrice: 749,
    originalPrice: null,
    tag: "BEST DEALS",
    tagType: "deal",
  },
  {
    id: 20,
    name: "DJI Mini 3 Pro Drone with RC",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 450,
    currentPrice: 909,
    originalPrice: null,
    tag: null,
  },
  {
    id: 21,
    name: "Razer BlackWidow V4 Pro Keyboard",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 230,
    currentPrice: 229,
    originalPrice: null,
    tag: "HOT",
    tagType: "hot",
  },
  {
    id: 22,
    name: "Sonos One (Gen 2) Smart Speaker",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 1400,
    currentPrice: 219,
    originalPrice: null,
    tag: null,
  },
  {
    id: 23,
    name: "Fitbit Charge 5 Advanced Fitness",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400",
    rating: 4.0,
    reviews: 3200,
    currentPrice: 129,
    originalPrice: 179,
    tag: "SALE",
    tagType: "sale",
  },
  {
    id: 24,
    name: "Yeti Blue Nano USB Microphone",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 890,
    currentPrice: 99,
    originalPrice: null,
    tag: null,
  },
  {
    id: 25,
    name: "WD Black 2TB P40 Game Drive SSD",
    image:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 120,
    currentPrice: 179,
    originalPrice: 229,
    tag: "BEST DEALS",
    tagType: "deal",
  },
  {
    id: 26,
    name: "Ring Video Doorbell 4",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400",
    rating: 4.0,
    reviews: 1500,
    currentPrice: 159,
    originalPrice: null,
    tag: null,
  },
  {
    id: 27,
    name: "SteelSeries Arctis Nova Pro Wireless",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    rating: 4.5,
    reviews: 440,
    currentPrice: 349,
    originalPrice: null,
    tag: "HOT",
    tagType: "hot",
  },
  {
    id: 28,
    name: "Anker 737 Power Bank (PowerCore 24K)",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    reviews: 980,
    currentPrice: 149,
    originalPrice: null,
    tag: "SALE",
    tagType: "sale",
  },
];

function Product() {
  return (
    <main>
      <section className="bg-[#F2F4F5] py-6.5">
        <div className="container mx-auto flex items-center gap-2 text-sm text-[#5F6C72]">
          <PiHouseBold size={20} />
          <Link to="/">Home</Link>
          <IoChevronForward size={12} />
          <span className="text-[#2DA5F3] font-medium hover:underline cursor-pointer">
            Electronics Devices
          </span>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto flex flex-col gap-6">
          <div className="bg-[#F2F4F5] py-3 text-center">
            <span className="font-bold text-sm text-[#191C1F]">
              {products.length}
            </span>{" "}
            Results found.
          </div>
          <div className="grid grid-cols-4 gap-4">
            {products.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="mb-18 text-center flex justify-center items-center gap-5">
        <button className="w-10 h-10 rounded-full border border-[#FA8232] flex items-center justify-center text-[#FA8232] hover:bg-[#FA8232] hover:text-white hover:cursor-pointer transition-all">
          <IoArrowBack size={20} />
        </button>

        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all bg-[#FA8232] border-[#FA8232] text-white hover:cursor-pointer">
            01
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all border-[#E4E7E9] text-[#191C1F] hover:border-[#FA8232] hover:cursor-pointer">
            02
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all border-[#E4E7E9] text-[#191C1F] hover:border-[#FA8232] hover:cursor-pointer">
            03
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all border-[#E4E7E9] text-[#191C1F] hover:border-[#FA8232] hover:cursor-pointer">
            04
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all border-[#E4E7E9] text-[#191C1F] hover:border-[#FA8232] hover:cursor-pointer">
            05
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-medium transition-all border-[#E4E7E9] text-[#191C1F] hover:border-[#FA8232] hover:cursor-pointer">
            06
          </button>
        </div>

        <button className="w-10 h-10 rounded-full border border-[#FA8232] flex items-center justify-center text-[#FA8232] hover:bg-[#FA8232] hover:text-white hover:cursor-pointer transition-all">
          <IoArrowForward size={20} />
        </button>
      </section>
    </main>
  );
}

export default Product;

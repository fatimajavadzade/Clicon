import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  PiArrowsCounterClockwiseFill,
  PiHeadphonesLight,
  PiInfoLight,
  PiMapPinLineLight,
} from "react-icons/pi";
import { TbPhoneCall } from "react-icons/tb";
import { earphones, googlePixel6Pro, notebook, playstation } from "../assets";
import { FaArrowRight } from "react-icons/fa";
import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60",
    author: "Kristin",
    date: "19 Dec, 2013",
    comments: 453,
    title:
      "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    description:
      "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60",
    author: "Robert",
    date: "28 Nov, 2015",
    comments: 738,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    description:
      "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
    author: "Arlene",
    date: "9 May, 2014",
    comments: 826,
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    description:
      "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
  },
];

function Home() {
  return (
    <main>
      <section className="w-full bg-white border-b border-[#E4E7E9] py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 bg-[#F2F4F5] px-6 py-3.5 rounded-xs text-[#191C1F] font-medium cursor-pointer">
              <span>All Category</span>
              <IoIosArrowDown />
            </div>

            <a
              href="#"
              className="flex items-center gap-1.5 text-[#5F6C72] text-sm"
            >
              <PiMapPinLineLight className="text-2xl" />
              <span>Track Order</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-[#5F6C72] text-sm"
            >
              <PiArrowsCounterClockwiseFill className="text-2xl" />
              <span>Compare</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-[#5F6C72] text-sm"
            >
              <PiHeadphonesLight className="text-2xl" />
              <span>Customer Support</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-[#5F6C72] text-sm"
            >
              <PiInfoLight className="text-2xl" />
              <span>Need Help</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#191C1F] text-[18px]">
            <TbPhoneCall className="text-[28px]" />
            <span>+1-202-555-0104</span>
          </div>
        </div>
      </section>
      <section className="container mx-auto pt-6 bg-white">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-[#F2F4F5] p-14 flex flex-row items-center justify-between relative rounded-md">
            <div className="absolute top-13 right-13 w-25 h-25 bg-[#2DA5F3] border-6 border-white rounded-full flex items-center justify-center text-[#FFFFFF] font-semibold z-10 shadow-xs">
              <span className="text-[20px]">$299</span>
            </div>

            <div className="max-w-sm">
              <span className="text-[#2484C2] font-semibold text-sm uppercase">
                The Best Place to Play
              </span>
              <h2 className="text-5xl font-semibold text-[#191C1F] mt-1 mb-4">
                Xbox Consoles
              </h2>
              <p className="text-[#475156] text-[18px] mb-6">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </p>
              <button className="bg-[#FA8232] text-white font-bold py-3 px-8 rounded-[3px] flex items-center gap-3 hover:cursor-pointer">
                <span>Shop Now</span>
                <FaArrowRight />
              </button>
            </div>

            <div>
              <img
                src={playstation}
                alt="Xbox Consoles"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[#191C1F] p-10 flex items-center justify-between relative overflow-hidden rounded-md">
              <div className="max-w-40 z-10">
                <span className="text-[#EBC80C] font-medium text-sm uppercase">
                  Summer Sales
                </span>
                <h3 className="text-2xl font-semibold text-white mt-1.25 mb-4.5">
                  New Google Pixel 6 Pro
                </h3>
                <button className="bg-[#FA8232] text-white font-bold py-3 px-6 rounded-[3px] flex items-center gap-3 hover:cursor-pointer">
                  <span>Shop Now</span>
                  <FaArrowRight />
                </button>
              </div>

              <div className="absolute -bottom-2.5 right-0">
                <img
                  src={googlePixel6Pro}
                  alt="Google Pixel 6 Pro"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              <span className="absolute top-6 right-6 bg-[#EFD33D] text-[#141414] text-base font-semibold px-4 py-2 rounded-xs">
                29% OFF
              </span>
            </div>

            <div className="bg-[#F2F4F5] p-10 flex items-center justify-between rounded-md">
              <div>
                <img
                  src={earphones}
                  alt="Xiaomi FlipBuds Pro"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#191C1F] mb-3">
                  Xiaomi
                  <br />
                  FlipBuds Pro
                </h3>
                <span className="text-[#2DA5F3] font-semibold text-[18px]">
                  $299 USD
                </span>
                <button className="bg-[#FA8232] text-white font-bold py-3 px-6 rounded-[3px] flex items-center gap-3 hover:cursor-pointer mt-5">
                  <span>Shop Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FFE7D6] py-6 px-15 flex items-center justify-between">
          <div>
            <span className="bg-[#2DA5F3] text-[#FFFFFF] px-3 py-1.5 rounded-xs text-sm font-semibold">
              SAVE UP TO $200.00
            </span>
            <h2 className="text-5xl font-semibold text-[#191C1F] mt-3">
              Macbook Pro
            </h2>
            <p className="text-[#191C1F] text-2xl my-6 max-w-106">
              Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage.
            </p>
            <button className="bg-[#FA8232] text-white font-bold py-3 px-8 rounded-[3px] flex items-center gap-3 hover:cursor-pointer">
              <span>Shop Now</span>
              <FaArrowRight />
            </button>
          </div>

          <div className="relative max-w-112.5">
            <img
              src={notebook}
              alt="Macbook Pro"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute top-3 left-1 w-27 h-27 bg-[#FFCEAD] border-6 border-white rounded-full flex items-center justify-center text-[#191C1F] font-semibold z-10">
              <span className="text-[20px]">$1999</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-[#F2F4F5]">
        <div className="container mx-auto">
          <h2 className="text-[32px] font-semibold text-center text-[#191C1F] mb-10">
            Latest News
          </h2>

          <div className="grid grid-cols-3 gap-6">
            {newsData.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

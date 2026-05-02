import React from "react";
import { CiHeart } from "react-icons/ci";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterestP,
  FaReddit,
  FaRegHeart,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { PiUserLight } from "react-icons/pi";

function Header() {
  return (
    <header className="w-full bg-[#1B6392]">
      {/* Header Top */}
      <div className="text-[#FFFFFF] text-sm py-3 border-b border-[#4e7b9f]">
        <div className="container mx-auto flex justify-between items-center">
          <p>Welcome to Clicon online eCommerce store.</p>

          <div className="flex items-center gap-3 text-sm text-[#FFFFFF]">
            <span>Follow us:</span>

            <div className="flex items-center gap-3 text-[16px]">
              <a href="https://twitter.com" target="_blank">
                <FaTwitter className="hover:cursor-pointer" />
              </a>

              <a href="https://facebook.com" target="_blank">
                <FaFacebook className="hover:cursor-pointer" />
              </a>

              <a href="https://pinterest.com" target="_blank">
                <FaPinterestP className="hover:cursor-pointer" />
              </a>

              <a href="https://reddit.com" target="_blank">
                <FaReddit className="hover:cursor-pointer" />
              </a>

              <a href="https://youtube.com" target="_blank">
                <FaYoutube className="hover:cursor-pointer" />
              </a>

              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="hover:cursor-pointer" />
              </a>
            </div>

            <div className="flex items-center gap-6 border-l border-[#4e7b9f] pl-6 ml-3">
              <select className="bg-transparent outline-none">
                <option>Eng</option>
              </select>

              <select className="bg-transparent outline-none">
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="py-5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <h1 className="flex items-center gap-2 text-white font-bold text-[32px]">
            <div className="bg-white text-[#1B6392] rounded-full w-12 h-12 flex items-center justify-center">
              <div className="bg-white border-4 border-[#1B6392] rounded-full w-6 h-6 flex items-center justify-center"></div>
            </div>
            CLICON
          </h1>

          {/* Search */}
          <div className="w-1/2 flex items-center gap-2 bg-white px-5 py-3.5 rounded-xs">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full placeholder-[#77878F] outline-none"
            />
            <LuSearch />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 text-white text-2xl">
            <FiShoppingCart className="hover:cursor-pointer" />
            <FaRegHeart className="hover:cursor-pointer" />
            <PiUserLight className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

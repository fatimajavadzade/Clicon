import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { appleLogo, playStoreImg } from "../assets";

function Footer() {
  return (
    <footer className="bg-[#191C1F] text-[#929FA5]">
      {/* Footer Top */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-5 gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="flex items-center gap-2 text-white font-bold text-[32px]">
              <div className="bg-[#FA8232] text-[#1B6392] rounded-full w-12 h-12 flex items-center justify-center">
                <div className="bg-[#FA8232] border-4 border-[#191C1F] rounded-full w-6 h-6 flex items-center justify-center"></div>
              </div>
              CLICON
            </h1>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-[#77878F]">
                  Customer Supports:
                </span>
                <span className="font-medium text-white">(629) 555-0129</span>
              </div>
              <span className="text-[#ADB7BC]">
                4517 Washington Ave. <br />
                Manchester, Kentucky 39495
              </span>
              <a
                href="mailto:info@kinbo.com"
                className="text-[#FFFFFF] hover:underline"
              >
                info@kinbo.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4.5">
            <h3 className="text-white font-medium text-base uppercase">
              Top Category
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Computer & Laptop
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                SmartPhone
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Headphone
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Accessories
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Camera & Photo
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                TV & Homes
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                <span>Browse All Product</span>
                <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4.5">
            <h3 className="text-white font-medium text-base uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Shop Product
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Shoping Cart
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Wishlist
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Compare
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Track Order
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                Customer Help
              </a>
              <a
                href="#"
                className="text-[#929FA5] text-sm font-medium hover:text-[#EBC80C] transition duration-200"
              >
                About Us
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4.5">
            <h3 className="text-white font-medium text-base uppercase">
              Download App
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="max-w-44 flex items-center gap-4 bg-[#202428] text-white px-5 py-4 rounded-[3px] hover:bg-[#282d32] transition duration-200"
              >
                <img src={playStoreImg} alt="Play Store Image" />
                <div className="flex flex-col gap-1">
                  <div className="text-[11px] text-white">Get it now</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="max-w-44 flex items-center gap-4 bg-[#202428] text-white px-5 py-4 rounded-[3px] hover:bg-[#282d32] transition duration-200"
              >
                <img src={appleLogo} alt="Apple Logo" />
                <div className="flex flex-col gap-1">
                  <div className="text-[11px] text-white">Get it now</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4.5">
            <h3 className="text-white font-medium text-base uppercase">
              Popular Tag
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Game
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                iPhone
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                TV
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Asus Laptops
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Macbook
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                SSD
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Graphics Card
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Power Bank
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Smart TV
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Speaker
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Tablet
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Microwave
              </span>

              <span className="text-xs bg-[#191C1F] hover:bg-[#303639] text-[#FFFFFF] px-3 py-1.5 rounded-xs border border-[#303639] hover:border-white cursor-pointer transition duration-200">
                Samsung
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#282D32]" />

      {/* Footer */}
      <div className="text-center text-xs text-[#ADB7BC] py-6">
        Kinbo - eCommerce Template © 2021. Design by Templatecookie
      </div>
    </footer>
  );
}

export default Footer;

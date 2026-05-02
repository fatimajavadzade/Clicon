import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineChat } from "react-icons/hi";
import { PiCalendarBlank } from "react-icons/pi";

function NewsCard({ item }) {
  return (
    <div className="bg-white rounded-sm shadow-xs border border-[#E4E7E9] overflow-hidden flex flex-col justify-between p-8">
      <div>
        <div className="mb-5">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center space-x-4 text-xs text-[#FA8232] mb-2">
          <div className="flex items-center gap-2">
            <FaRegCircleUser className="text-2xl" />
            <span className="text-[#475156] text-sm">{item.author}</span>
          </div>

          <div className="flex items-center gap-2">
            <PiCalendarBlank className="text-2xl" />
            <span className="text-[#475156] text-sm">{item.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiOutlineChat className="text-2xl" />
            <span className="text-[#475156] text-sm">{item.comments}</span>
          </div>
        </div>

        <h3 className="text-[#191C1F] font-medium text-2xl mb-3">
          {item.title}
        </h3>
        <p className="text-[#77878F] text-base mb-6">{item.description}</p>
      </div>

      <div>
        <a
          href="#"
          className="inline-flex gap-2 items-center px-6 py-3 text-xs font-bold text-[#FA8232] border-2 border-[#FFE7D6] rounded-xs hover:bg-orange-50 transition-colors duration-200 uppercase"
        >
          Read More
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
}

export default NewsCard;

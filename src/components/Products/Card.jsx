import React, { useContext } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BASKET } from "../../contexts/BasketContext";

function Card({ item }) {
  const { addToBasket } = useContext(BASKET);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(item.rating)) {
      stars.push(<AiFillStar key={i} className="text-[#FA8232] text-base" />);
    } else {
      stars.push(
        <AiOutlineStar key={i} className="text-[#ADB7BC] text-base" />,
      );
    }
  }

  return (
    <div className="group flex flex-col border border-[#E4E7E9] p-4 bg-white relative hover:shadow transition-shadow cursor-pointer">
      {item.tag && (
        <div
          className={`absolute top-3 left-3 px-2.5 py-1.25 text-[12px] font-semibold rounded-xs uppercase z-10
          ${
            item.tagType === "hot"
              ? "bg-[#EE5858] text-white"
              : item.tagType === "sale"
                ? "bg-[#2DB224] text-white"
                : item.tagType === "discount"
                  ? "bg-[#EFD33D] text-black"
                  : "bg-[#2DA5F3] text-white"
          }`}
        >
          {item.tag}
        </div>
      )}

      <div className="relative w-full h-43 flex items-center justify-center mb-6 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div
            onClick={() => {
              addToBasket(item);
            }}
            className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <FiShoppingCart className="w-6 h-6 text-sm text-[#191C1F]" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex gap-[1.5px]">{stars}</div>
        <span className="text-[#77878F] text-xs">({item.reviews})</span>
      </div>

      <h3 className="text-[#191C1F] text-sm my-2">{item.name}</h3>

      <div className="flex items-center gap-2">
        {item.originalPrice && (
          <span className="text-[#ADB7BC] line-through text-sm">
            ${item.originalPrice}
          </span>
        )}
        <span className="text-[#2DA5F3] font-bold text-sm">
          ${item.currentPrice}
        </span>
      </div>
    </div>
  );
}

export default Card;
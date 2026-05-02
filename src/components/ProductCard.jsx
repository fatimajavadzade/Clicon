import React from "react";

function ProductCard({ item }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-[#E4E7E9] rounded-[3px]">
      <div className="w-20 h-20 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div>
        <h4 className="text-sm text-[#191C1F] mb-2">{item.title}</h4>
        <span className="text-[#2DA5F3] font-semibold text-sm">
          {item.price}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;

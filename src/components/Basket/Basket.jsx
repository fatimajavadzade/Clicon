import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoXCircle } from "react-icons/go";
import { IoChevronForward } from "react-icons/io5";
import { PiHouseBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Basket() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("basket")) || [];
    setCartItems(data);
  }, []);

  // Total Amount
  let totalAmount = 0;
  cartItems.forEach((item) => {
    totalAmount += item.currentPrice * item.quantity;
  });

  // Remove from basket
  function removeItem(id) {
    var updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    localStorage.setItem("basket", JSON.stringify(updatedCart));
  }

  // UPDATE Quantity
  function updateQuantity(id, amount) {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item,
    );

    const filteredCart = updatedCart.filter((item) => item.quantity > 0);

    setCartItems(filteredCart);
    localStorage.setItem("basket", JSON.stringify(filteredCart));
  }

  return (
    <main>
      <section className="bg-[#F2F4F5] py-6.5">
        <div className="container mx-auto flex items-center gap-2 text-sm text-[#5F6C72]">
          <PiHouseBold size={20} />
          <Link to="/">Home</Link>
          <IoChevronForward size={12} />
          <span className="text-[#2DA5F3] font-medium hover:underline cursor-pointer">
            Shoping Card
          </span>
        </div>
      </section>
      <section className="py-18">
        <div className="container mx-auto grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-sm border border-[#E4E7E9] h-fit">
            <div>
              <h2 className="text-[#191C1F] text-[18px] font-medium py-5 px-6">
                Shopping Card
              </h2>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-y border-[#E4E7E9] bg-[#F2F4F5] text-left text-xs font-medium text-[#475156] uppercase">
                    <th className="pl-6 pr-3 py-2.5">Products</th>
                    <th className="py-2.5 px-3">Price</th>
                    <th className="py-2.5 px-3">Quantity</th>
                    <th className="pl-3 pr-6 py-2.5">Sub-total</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-5 pl-6 pr-3">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#929FA5] hover:text-[#EE5858] cursor-pointer"
                          >
                            <GoXCircle className="w-6 h-6" />
                          </button>
                          <img
                            src={item.image}
                            alt="4K TV"
                            className="w-18 h-18 object-cover"
                          />
                          <span className="text-sm text-[#475156] max-w-60">
                            {item.name}
                          </span>
                        </div>
                      </td>

                      <td className="py-5 px-3">
                        <div className="text-sm">
                          {item.originalPrice && (
                            <span className="line-through text-[#929FA5] mr-1">
                              ${item.originalPrice}
                            </span>
                          )}
                          <span className="text-[#475156] font-medium">
                            ${item.currentPrice}
                          </span>
                        </div>
                      </td>

                      <td className="py-5 px-3">
                        <div className="flex">
                          <div className="flex items-center border border-[#E4E7E9] rounded-[3px] px-4 py-3 bg-white">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-[#929FA5] hover:text-black cursor-pointer"
                            >
                              <FiMinus size={16} />
                            </button>
                            <span className="px-6 text-[#475156] font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-[#929FA5] hover:text-black cursor-pointer"
                            >
                              <FiPlus size={16} />
                            </button>
                          </div>
                        </div>
                      </td>

                      <td className="py-5 pr-6 pl-3">
                        <span className="text-sm font-medium text-[#191C1F]">
                          ${item.currentPrice * item.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-between items-center p-6 border-t border-[#E4E7E9]">
                <a
                  href="/products"
                  className="hover:cursor-pointer flex items-center gap-2 px-6 py-3 border-2 border-[#2DA5F3] text-[#2DA5F3] font-bold text-[14px] uppercase hover:bg-blue-50 transition-colors rounded-xs"
                >
                  <FaArrowLeft size={16} /> Return to shop
                </a>
                <button className="hover:cursor-pointer px-6 py-3 border-2 border-[#2DA5F3] text-[#2DA5F3] font-bold text-[14px] uppercase hover:bg-blue-50 transition-colors rounded-xs">
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-sm border border-[#E4E7E9]">
              <h2 className="text-[18px] font-medium px-6 py-5">Card Totals</h2>
              <div className="flex flex-col gap-3 text-sm px-6 pb-6">
                <div className="flex justify-between text-[#5F6C72]">
                  <span>Sub-total</span>
                  <span className="font-medium text-[#191C1F]">
                    ${totalAmount}
                  </span>
                </div>
                <div className="flex justify-between text-[#5F6C72]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#191C1F]">Free</span>
                </div>
                <div className="flex justify-between text-[#5F6C72]">
                  <span>Discount</span>
                  <span className="font-medium text-[#191C1F]">$0.00</span>
                </div>
                <div className="flex justify-between text-[#5F6C72] pb-4 border-b border-gray-100">
                  <span>Tax</span>
                  <span className="font-medium text-[#191C1F]">$0.00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-base text-[#191C1F]">Total</span>
                  <span className="text-lg font-semibold text-[#191C1F]">
                    ${totalAmount}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-[#FA8232] hover:bg-[#d47a3e] hover:cursor-pointer text-white font-bold py-4 rounded-[3px] flex items-center justify-center gap-3 transition-colors uppercase">
                  Proceed to checkout <FaArrowRight size={18} strokeWidth={2} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-sm border border-[#E4E7E9]">
              <div className="border-b border-gray-100 px-6 py-5">
                <h2 className="text-[18px] font-medium text-[#191C1F]">
                  Coupon Code
                </h2>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full border border-[#E4E7E9] py-3 px-4 rounded-xs text-sm focus:outline-none focus:border-[#2DA5F3] placeholder:text-[#77878F]"
                />
                <button className="w-[159px] bg-[#2DA5F3] hover:bg-[#4a96d8] text-white font-bold py-5 px-6 rounded-xs text-sm uppercase transition-colors hover:cursor-pointer">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Basket;

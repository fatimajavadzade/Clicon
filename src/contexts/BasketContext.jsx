import React, { createContext, useState, useEffect } from "react";

export const BASKET = createContext();

function BasketContext({ children }) {
  const [basket, setBasket] = useState(() => {
    const initial = localStorage.getItem("basket");
    return initial ? JSON.parse(initial) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(product) {
    const isExist = basket.find((item) => item.id === product.id);

    if (isExist) {
      alert("Məhsul artıq səbətdədir!");
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
      alert("Məhsul səbətə əlavə olundu!");
    }
  }

  function deleteFromBasket(id) {
    const cart = basket.filter((item) => item.id !== id);
    setBasket(cart);
  }

  function updateQuantity(id, amount) {
    const updatedCart = basket.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item,
    );

    const filteredCart = updatedCart.filter((item) => item.quantity > 0);
    setBasket(filteredCart);
  }

  return (
    <BASKET.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        deleteFromBasket,
        updateQuantity,
      }}
    >
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
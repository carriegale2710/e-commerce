import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(["empty"]);
  console.log(`Current Cart: ${cart.map((item) => item.id)}`);

  const addToCart = (productItem) => {
    if (cart.includes("empty")) {
      cart.pop(cart[0]);
    }
    console.log(`Adding to cart: ${productItem.id}`);
    setCart((prevCart) => [...prevCart, productItem]);
  };

  const removeItemFromCart = (itemId) => {
    const removedCart = (prevCart) =>
      prevCart.filter((item) => item.id !== itemId);
    setCart(removedCart);
  };

  const clearCart = () => {
    setCart(["empty"]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

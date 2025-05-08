import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(["empty"]);
  console.log(`Current Cart: ${cart.map((item) => item.id)}`);

  //   const [totalPrice, setTotalPrice] = useState(0); - don't need

  const addToCart = (productItem) => {
    if (cart.includes("empty")) {
      cart.pop(cart[0]);
    }
    console.log(`Adding to cart: ${productItem.id}`);
    setCart((prevCart) => [...prevCart, productItem]);
    //setTotalPrice(totalPrice + productItem.price); //-> getTotalPrice
  };

  const removeItemFromCart = (itemId) => {
    const removedCart = (prevCart) =>
      prevCart.filter((item) => item.id !== itemId);
    setCart(removedCart);
  };

  const clearCart = () => {
    setCart(["empty"]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (item === "empty") return total;
      return total + item.price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        clearCart,
        // totalPrice,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

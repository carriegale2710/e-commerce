import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(["empty"]);
  console.log(`Current Cart: ${cart.map((item) => item.id)}`);

  //   const [totalPrice, setTotalPrice] = useState(0); - don't need

  const addToCart = (productItem, selectedVariant) => {
    if (cart.includes("empty")) {
      cart.pop(cart[0]);
    }
    if (!checkStockAvailability(productItem, selectedVariant)) {
      console.log("run out of stock - check again later");
      return false;
    }
    console.log(`Adding to cart: ${productItem.id}`);

    const itemWithVariant = {
      ...productItem,
      selectedVariant: selectedVariant,
    };

    setCart((prevCart) => [...prevCart, itemWithVariant]);
    //setTotalPrice(totalPrice + productItem.price); //-> getTotalPrice
    return true;
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

  //NOTE - Checking stock availability: You should not be able to add more items than are in stock to the cart

  const checkStockAvailability = (productItem, selectedVariant) => {
    const countDuplicateItemsInCart = cart.filter(
      (item) =>
        item.id === productItem.id && item.selectedVariant === selectedVariant
    ).length;

    console.log({
      productId: productItem.id,
      variant: selectedVariant,
      stockAvailable: productItem.stock[selectedVariant],
      inCart: countDuplicateItemsInCart,
    });

    return productItem.stock[selectedVariant] > countDuplicateItemsInCart;
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

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(["empty"]);
  const [favsList, setFavsList] = useState([]);

  console.log(`Current Cart: ${cart.map((item) => item.id)}`);
  //console.log(`Current FavsList: ${favsList.map((item) => item.id)}`);

  /* addToCart: 
    1.check item already exists in array, -> use find() with specific product id
    2.if yes just increment the qty prop by 1 -> spread and update the qty prop
*/
  const addToCart = (productItem, selectedVariant) => {
    if (cart.includes("empty")) {
      cart.pop(cart[0]);
    }
    if (!checkStockAvailability(productItem, selectedVariant)) {
      console.log("run out of stock - check again later");
      return false; //fail
    }
    console.log(`Adding to cart: ${productItem.id}`);

    const itemWithVariant = {
      ...productItem,
      selectedVariant: selectedVariant,
    };

    setCart((prevCart) => [...prevCart, itemWithVariant]);
    return true; //success
  };

  //NOTE : decrement the qty -1, if it turns to 0, them remove the ItemCard altogether (or should only show if qty >= 1)

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
  //- needs to check if the qty =< stock for the selectedVariant

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

  //favorite button
  const updateFavorited = (productId) => {
    setFavsList((prevFavsList) => {
      if (prevFavsList.includes(productId)) {
        // Remove from favorites if already favorited
        return prevFavsList.filter((id) => id !== productId);
      } else {
        // Add to favorites if not favorited
        return [...prevFavsList, productId];
      }
    });
  };

  //updating quantity

  //this makes sure the context and its functions are available everywhere in the app

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        clearCart,
        getTotalPrice,
        checkStockAvailability,
        favsList,
        updateFavorited,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

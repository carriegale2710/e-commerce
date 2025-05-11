import React, { createContext, useState } from "react";
export const CartContext = createContext(); //context shared across entire pp

export const CartProvider = ({ children }) => {
  //state management
  const [cart, setCart] = useState([]);
  //console.log(`Current Cart: ${cart.map((item) => item.id)}`);
  const [favsList, setFavsList] = useState([]);
  //console.log(`Current FavsList: ${favsList.map((item) => item.id)}`);

  /*NOTE - stock checker function: 
  1. You should not be able to add more items than are in stock to the cart
  2. Should run whenever user attempts to add a product variant to the cart
  */
  const checkStockAvailability = (productItem, selectedVariant) => {
    const numOfItemsInCart = cart.filter(
      (item) =>
        item.id === productItem.id && item.selectedVariant === selectedVariant
    ).length;

    //- needs to check if the qty =< stock for the selectedVariant
    // if number of items for THAT SPECIFIC VARIANT existing in cart EXCEEDS stock available (based on stock prop), return true
    const notEnoughStock =
      productItem.stock[selectedVariant] > numOfItemsInCart;

    return notEnoughStock;
  };

  /* NOTE addToCart() - user adds item to cart by clicking button
    1. check the stock available for selected variant
    2. check item already exists in array, -> use find() with specific product id
    3. if yes just increment the qty prop by 1 -> spread and update the qty prop
*/
  const addToCart = (productItem, selectedVariant) => {
    // + selectedQty
    //props come from a form: user selects product (page/card), variant (dropdown) and qty needed (button)

    //check how much stock is available for this variant
    // - should not be exceeded by selectedQty + no. already in cart
    //bonus: if stock falls to zero, should the variant option be automatically greyed out/unselectable from dropdown menu?

    //if not enough stock, display error message
    if (!checkStockAvailability(productItem, selectedVariant)) {
      // + selectedQty
      console.log("run out of stock - check again later");
      return false; //fail
    }

    //if enough stock, add to the cartList
    console.log(`Adding to cart: ${productItem.id}`);

    //create new prop to identify what the variant the user chose to add to cart
    const itemWithVariant = {
      ...productItem,
      selectedVariant: selectedVariant,
      // + selectedQty: selectedQty,
    };

    // update the cart with added item
    setCart((prevCart) => [...prevCart, itemWithVariant]); // + selectedQty:

    return true; //successfully added
  };

  //NOTE - Remove 1 item from the cartList
  const removeItemFromCart = (itemId) => {
    const removedCart = (prevCart) =>
      prevCart.filter((item) => item.id !== itemId);
    setCart(removedCart);
  };

  //NOTE - Remove ALL items from the cartList
  const clearCart = () => {
    setCart([]);
  };

  //NOTE - Total price of ALL items from the cartList
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      if (item === "empty") return total;
      return total + item.price;
    }, 0);
  };

  //NOTE - favorite button -> bonus idea: wishlist page later
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

  //NOTE - this makes sure the context and its functions are available everywhere in the app
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

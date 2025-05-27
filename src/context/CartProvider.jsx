import React, { createContext, useState } from "react";
export const CartContext = createContext(/*null */); //context shared across entire pp

export const CartProvider = ({ children }) => {
  //NOTE - state management
  const [cart, setCart] = useState([]);
  const [favsList, setFavsList] = useState([]);
  //console.log(`Current Cart: ${cart.map((item) => item.id)}`);
  //console.log(`Current FavsList: ${favsList.map((item) => item.id)}`);

  // SECTION - METHODS/fns
  /* Which components are using these functions? - use to debug your code

    1. App.jsx - Wraps around whole App
    2. CartPage.jsx - Wraps CartList component which uses CartContext
    3. CartList.jsx - Uses cart state and functions for displaying/managing cart items
      - Using cart, clearCart, getTotalCartPrice
    4. VariantSelectForm.jsx - Uses cart functions for adding items and managing favorites
    - using  addItemToCart, updateFavoritedItems, favsList


    For debugging stock:
      Try adding an item to cart
      Check console logs for:
      Current items in cart
      Available stock
      Any error messages
      Verify that you can't add more items than available stock


    */

  //NOTE - CHECK IF STOCK AVAILABLE FOR A SPECIFIC VARIANT
  /* LOGIC:
  1. check the stock available for selected variant
  2. check item already exists in array, -> use find() with specific product id
  3. if yes just increment the qty prop by 1 -> spread and update the qty prop
   */
  const checkStockAvailability = (productItem) => {
    const numOfItemsInCart = cart.filter(
      (item) =>
        item.id === productItem.id && item.selectedVariant === selectedVariant
    ).length;

    const isStockAvailable =
      productItem.variantData.variantStockAvailable > numOfItemsInCart;

    return isStockAvailable;
  };

  //NOTE - ADD AN ITEM TO THE CART
  const addItemToCart = (selectedProduct) => {
    console.log("selectedProductData passed into addItemToCart");
    console.log(selectedProduct);
    const productItem = selectedProduct;

    if (!checkStockAvailability(productItem)) {
      console.log("run out of stock - check again later");
      return false;
    }

    //if enough stock, add to the cartList
    console.log(`Adding to cart: ${productItem.id}`);
    console.log(`Adding to cart: ${productItem}`);

    // update the cart with added item
    setCart((prevCart) => [...prevCart, productItem]); // + selectedQty:?

    return true;
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
  const getTotalCartPrice = () => {
    return cart.reduce((total, item) => {
      console.log("getTotalCartPrice");
      console.log("Total:" + total);
      console.log("Item:" + item);
      const variantTotal = item.price * item.quantity;
      return total + variantTotal;
    }, 0);
  };

  //NOTE - favorite button -> bonus idea: wishlist page later
  const updateFavoritedItems = (productId) => {
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
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getTotalCartPrice,
        checkStockAvailability,
        favsList,
        updateFavoritedItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

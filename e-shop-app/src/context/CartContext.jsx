import React, { createContext, useState } from "react";
export const CartContext = createContext(/*null */); //context shared across entire pp

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
    //how many of this variant already added to cart?
    const numOfItemsInCart = cart.filter(
      (item) =>
        item.id === productItem.id && item.selectedVariant === selectedVariant
    ).length;

    // where is the selected variant in variantData?
    const selectedVariantData = productItem.variantData.find(
      (variant) => variant.productVariantId === selectedVariant
    );

    if (!selectedVariantData) {
      console.error("this variant couldn't be found");
      return false;
    }

    const stock = selectedVariantData.variantStockAvailable;
    console.log("Items in cart:", numOfItemsInCart);
    console.log("Stock available:", selectedVariantData.variantStockAvailable);

    //enough stock for selectedVariant?
    return productItem.quantity > stock;
  };

  /* NOTE addToCart() - user adds item to cart by clicking button

    1. check the stock available for selected variant
    2. check item already exists in array, -> use find() with specific product id
    3. if yes just increment the qty prop by 1 -> spread and update the qty prop
  */
  const addToCart = (productItem, selectedVariant) => {
    //props come from a form: user selects product (page/card), variant (dropdown) and qty needed (button)
    console.log("selectedVariant: " + selectedVariant);

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.id === productItem.id && item.selectedVariant === selectedVariant
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemIndex];

      // Find the matching variant
      const matchingVariant = productItem.variantData.find(
        (variant) => variant.productVariantId === selectedVariant
      );

      console.log("Matching variant:", matchingVariant);

      if (!matchingVariant) {
        console.error("Variant not found");
        return false;
      }

      const newQuantity = (existingItem.quantity || 1) + 1;

      if (!checkStockAvailability(productItem, selectedVariant)) {
        console.log("run out of stock - check again later");
        alert("run out of stock - check again later");
        return false;
      }

      updatedCart[existingItemIndex] = {
        ...existingItem,
        quantity: newQuantity,
        selectedVariant,
        currentVariant: matchingVariant, // Store the current variant data
      };

      setCart(updatedCart);
      return true;
    }

    // For new items, include the matching variant data
    const matchingVariant = productItem.variantData.find(
      (variant) => variant.productVariantId === selectedVariant
    );

    if (!matchingVariant) {
      console.error("Variant not found");
      return false;
    }
    //create new prop to identify what the variant the user chose to add to cart
    const itemWithVariant = {
      ...productItem,
      selectedVariant: selectedVariant,
      quantity: 1,
    };
    console.log("Updated cart item:", itemWithVariant);
    setCart((prevCart) => [...prevCart, itemWithVariant]); // update the cart with added item
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
      const variantTotal = item.price * item.quantity;
      return total + variantTotal;
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

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";

//firestore link:
//https://console.firebase.google.com/u/0/project/carries-firebase/firestore/databases/-default-/data/~2Fproducts~2FVbKECzzYpbnbyuVBlaNA

export const getProducts = async () => {
  try {
    const collectionRef = collection(db, "products");
    const querySnapshot = await getDocs(collectionRef);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products: " + error.message);
  }
};

//SECTION - UPDATING THE CART

//NOTE - state of cart must be shared across whole website - useContext -> CartContext

/*1. AddtoCart Function:

  USER FLOW

  --ProductCard---
  ACTION: User clicks 'add to cart' button
    -> calls addToCart (js.services)
  --js.services--
      --checking stock capacity--
      -> will check if qty of this item in current cart state vs stock available for this product
      -> if item quantity in cart is NOT less than stock qty of the item (stock prop):
        - do not add item id to the cart
        - display message to user 'not enough stock-check back later'
    -> product.id added to 'cart' array
    -> 'cart' state is updated with 'setCart'
    -> display confirmation message to user '[Item] added to cart!'
  --App.jsx--
    -> updated cart state is sent to CartList
  --CartList.jsx--
    -> CartList triggered to re-render
    -> each CartItemCard in CartList is re-rendered according to the cart array state
  --CartPage.jsx--
    -> CartList re-renders inside the CartPage
*/

/* 2. RemoveFromCart function: 

  USERFLOW

  --CartItemCard---
  ACTION: User clicks 'Remove from cart' button
    -> calls removeFromCart (js.services)
  --js.services--
    -> product.id is popped off the array in 'card' state
    -> cart state is updated
    -> display confirmation message to user '[Item] removed from cart!'
  --App.jsx--
    -> updated cart state is sent to CartList
  --CartList.jsx--
    -> CartList triggered to re-render
    -> each CartItemCard in CartList is re-rendered according to the cart array state
  --CartPage.jsx--
    -> CartList re-renders inside the CartPage
*/

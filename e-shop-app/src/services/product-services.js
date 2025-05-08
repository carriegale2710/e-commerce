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

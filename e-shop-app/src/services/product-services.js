import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
//firestore link: https://console.firebase.google.com/u/0/project/carries-firebase/firestore/databases/-default-/data/~2Fproducts~2FVbKECzzYpbnbyuVBlaNA

// Responsible for: handling all firestore communication and errors with fetching the database + transforming data
export const getProducts = async () => {
  try {
    //reference the "products" collection from db (firstore database)
    const collectionRef = collection(db, "products");

    //fetch all your individual products aka 'docs' from that collection
    const querySnapshot = await getDocs(collectionRef);

    //transform the data
    const products = querySnapshot.docs.map((doc) => ({
      // "for each doc, add the doc.id on top of existing fields"
      id: doc.id, // provide a unique id to each product
      ...doc.data(), // spread operator + .data()  - 'get the remaining fields and do the same'
    }));

    return products; //return the raw data
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
};

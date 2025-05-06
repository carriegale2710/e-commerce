import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";

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

export const addSampleProducts = async () => {
  const products = [
    {
      name: "Liquid Foundation",
      price: 29.99,
      color: "Ivory",
      thumbnail: "https://example.com/foundation.jpg",
    },
    {
      name: "Matte Lipstick",
      price: 19.99,
      color: "Ruby Red",
      thumbnail: "https://example.com/lipstick.jpg",
    },
    // Add more products as needed
  ];

  const productsRef = collection(db, "products");

  for (const product of products) {
    await addDoc(productsRef, product);
  }
};

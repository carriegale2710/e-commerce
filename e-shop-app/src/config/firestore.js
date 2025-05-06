// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_API,
  authDomain: "chicago-firestore.firebaseapp.com",
  projectId: "chicago-firestore",
  storageBucket: "chicago-firestore.firebasestorage.app",
  messagingSenderId: "241713324913",
  appId: "1:241713324913:web:94d16425e4683bec434cd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

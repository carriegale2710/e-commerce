import { useState, useEffect, addDoc } from "react";
import {
  getProducts,
  addSampleProducts,
} from "../../services/product-services";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductList.module.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      console.log("Fetched products:", data);
      setProducts(data);
      console.log("Set products:", products); //products data JSON string
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
    setLoading(false);
  };

  // const handleAddSamples = async () => {
  //   try {
  //     await addSampleProducts();
  //     fetchProducts(); // refresh the list after adding
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <div>
      <h2>Test Products</h2>
      {/* <button onClick={handleAddSamples}>Add Sample Products</button> */}
      <button onClick={fetchProducts}>Fetch Products</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};

export default ProductList;

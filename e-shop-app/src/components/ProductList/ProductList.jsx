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
      setProducts(data);
      console.log("Fetched products:", data);
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    }
    setLoading(false);
  };

  const handleAddSamples = async () => {
    try {
      await addSampleProducts();
      fetchProducts(); // Refresh the list after adding
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Test Products</h2>
      <button onClick={handleAddSamples}>Add Sample Products</button>
      <button onClick={fetchProducts}>Fetch Products</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const productsData = await getProducts();
  //       setProducts(productsData);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // if (loading) return <div>Loading...</div>;

  // return (
  //   <div className={classes.container}>
  //     {products.map((product) => (
  //       <ProductCard key={product.id} {...product} />
  //     ))}
  //   </div>
  // );
};

export default ProductList;

import { useState, useEffect, addDoc } from "react";
import { getProducts } from "../../services/product-services";
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

  console.log(products);

  const JSONstring = JSON.stringify(products, null, 2);
  //console.log(JSONstring);

  return (
    <div>
      <h2>Test Products</h2>
      <button onClick={fetchProducts}>Fetch Products</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <pre className={classes.card}>{JSONstring}</pre>
      <section className={classes.grid}>
        {products.map((product) => {
          //console.log(`Loading ${product.name}`);
          return <ProductCard key={product.id} productData={product} />;
        })}
      </section>
    </div>
  );
};

export default ProductList;

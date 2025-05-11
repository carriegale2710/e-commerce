import { useState, useEffect, addDoc } from "react";
import { getProducts } from "../../services/product-services";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import classes from "./ProductsLoader.module.scss";

// Responsibilities of this container:
// Manages UI state (loading, error, products)
// Handles UI-related side effects
// Renders components
// Manages UI-specific error states

const ProductsLoader = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true); // loading starts
      const data = await getProducts(); //calls the fetching function from product-services.js
      console.log("Fetched products:", data);
      setProducts(data); // sets the fetched data as variable
      console.log("Set products:", products); //products data JSON string
    } catch (err) {
      setError(err.message);
      console.error("Error loading products:", err); // catch loading errors
    } finally {
      setLoading(false); // loading finished
    }
  };

  useEffect(() => {
    // loads products on the screen
    loadProducts();
  }, []); //only run on mount (once!!)

  //(opt) just to preview data in dev mode
  console.log(products);
  const JSONstring = JSON.stringify(products, null, 2); //
  //console.log(JSONstring);

  return (
    <>
      <header>
        <h2>Browse our products</h2>
        <p>
          * Bonus - have an short button 'Add to card' available on the
          thumbnail of each product (DONE)
          <br />* Bonus: would be nice to have a modal display here when
          clicking 'Quick View' on each product
        </p>
      </header>
      <main className={classes.container}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ProductsGrid products={products} />}
      </main>
      <pre className={classes.card}>{JSONstring}</pre>
    </>
  );
};

export default ProductsLoader;

import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../services/product-services";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import { ProductsContext } from "../../context/ProductsProvider";
import classes from "./ProductsLoader.module.scss";

export default function ProductsLoader() {
  // let products = [];
  // const context = useContext(ProductsContext);
  // console.log("ProductsLoader context:", context); // Debug log

  // if (!context) {
  //   console.error("ProductsContext not found"); // Debug log
  //   return <div>Error: Products context not available</div>;
  // } else {
  //   const { products, isFail, isLoading, isSuccess, error } = context;
  // }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true); // loading starts
      const data = await getAllProducts(); //calls the fetching function from product-services.js
      console.log("Fetched products:", data);
      setProducts(data); // sets the fetched data as variable
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
    console.log("Set products:", products); //products data JSON string
  }, []); //only run on mount (once!!)

  //console.log(products);
  //(opt) just to preview data in dev mode
  const JSONstring = JSON.stringify(products, null, 2); //
  //console.log(JSONstring);

  return (
    <>
      <header>
        <h2>All products</h2>
        <p>Browse all our products!</p>
      </header>
      <main className={classes.container}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ProductsGrid products={products} />}
        {/* {!products ? (
          <div>Error: Products not defined</div>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : isFail ? (
          <p>{error.message}</p>
        ) : (
          isSuccess && <ProductsGrid products={products} />
        )} */}
      </main>
      <pre className={classes.preview}>{JSONstring}</pre>
    </>
  );
}

// Responsibilities of this container:
// Manages UI state (loading, error, products)
// Handles UI-related side effects
// Renders components
// Manages UI-specific error states

/////Bonus - have an short button 'Add to card' available on the thumbnail of each product (DONE)
// Bonus: would be nice to have a modal display here when clicking 'Quick View' on each product

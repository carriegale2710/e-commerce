import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../services/product-services";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";
import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import { ProductsContext } from "../../context/ProductsProvider";
import classes from "./ProductsLoader.module.scss";

export default function ProductsLoader() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getAllProducts();
      //console.log("Fetched products:", data);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []); //only run on mount (once!!)

  //array of objects
  console.log("Set products:", products);

  //(debugging) just to preview data in dev mode
  const JSONstring = JSON.stringify(products, null, 2); //
  //console.log(JSONstring);

  return (
    <>
      <section className={classes.container}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ProductsCarousel products={products} />}
      </section>
      <header>
        <h2>All products</h2>
        <p>Browse all our products!</p>
      </header>
      <section className={classes.container}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <ProductsGrid products={products} />}
      </section>
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

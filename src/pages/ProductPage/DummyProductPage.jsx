import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductsLoader from "../../containers/ProductsLoader/ProductsLoader";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./ProductPage.module.scss";

const DummyProductPage = () => {
  // const { products, loading, error } = useContext(ProductsContext);

  // these states are sent down as props to ProductsLoader (which does the actual fetching)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //array of objects
  console.log("Set products:", products);

  //(debugging) just to preview data in dev mode
  const JSONstring = JSON.stringify(products, null, 2); //
  console.log(JSONstring);

  //dummy product
  const productId = "huda-beauty-creamy-kohl-eyeliner";
  const variantId = "v/very-vanta";

  // Find product with matching ID and variant
  const product =
    products.length > 0 &&
    products.find(
      (product) =>
        product.id === productId &&
        product.variantData.some((variant) => variant.variantId === variantId)
    );

  if (!product) {
    return (
      <>
        <div className={classes.error}>
          <p>Product not found:</p>
          <p>
            Product ID: {productId}
            <br />
            Variant ID: {variantId}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <ProductsLoader
        setProducts={setProducts}
        setLoading={setLoading}
        setError={setError}
      />
      <header className={classes.container}>
        <h2>Product page</h2>
        <p>
          This page will show details about a single product when clicked on
          from the Shop Page products grid, it will have a image gallery with
          carousel, with arrows to slides thru images; it will have a
          description, and information fetched by firestore API; it will also
          have a button to add to cart - should show up on Cart Page
        </p>
      </header>
      <main className={classes.container}>
        <section className={classes.container}>
          {loading && <p>Loading product details...</p>}
          {error && <p>Error loading product: {error}</p>}
          {product ? (
            <ProductCard productInfo={product} />
          ) : (
            <p>Product not found</p>
          )}
        </section>
        <section className={classes.container}>
          <h2>User Reviews</h2>
          <p>
            Personal Bonus Idea for later: user Review section below the product
            details, with form to create a new review
          </p>
        </section>
      </main>
    </>
  );
};

export default DummyProductPage;

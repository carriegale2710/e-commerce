import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductsLoader from "../../containers/ProductsLoader/ProductsLoader";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./ProductPage.module.scss";

const DummyProductPage = () => {
  //NOTE - STATE MANAGEMENT
  // const { products, loading, error } = useContext(ProductsContext);
  // these states are sent down as props to ProductsLoader (which does the actual fetching)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // NOTE -  DEBUGGING
  console.log("Set products:", products); //preview set array of objects
  useEffect(() => {
    console.log("Products updated:", products); //preview CHANGED objects
  }, [products]);
  // console.log(JSON.stringify(products, null, 2)); //just to preview data as a JSON

  // NOTE -  RENDERING PRODUCT DATA ON PAGE
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

  return (
    <div className={classes.page}>
      <ProductsLoader
        setProducts={setProducts}
        setLoading={setLoading}
        setError={setError}
      />

      <main className={classes.container}>
        <section className={classes.container}>
          {loading && <p>Loading product details...</p>}
          {error && <p>Error loading product: {error}</p>}
          {product ? (
            <ProductCard productInfo={product} />
          ) : (
            <>
              <header className={classes.container}>
                <h2>Product not found</h2>
              </header>
              <div className={classes.error}>
                <p>
                  Product Id was: {productId}
                  <br />
                  Variant Id was: {variantId}
                </p>
              </div>
            </>
          )}
        </section>
        <section className={classes.reviews}>
          <h2>User Reviews</h2>
          <p>
            Personal Bonus Idea for later: user Review section below the product
            details, with form to create a new review
          </p>
        </section>
      </main>
    </div>
  );
};

export default DummyProductPage;

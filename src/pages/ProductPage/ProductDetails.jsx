import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductsLoader from "../../containers/ProductsLoader/ProductsLoader";
import ProductHero from "../../components/ProductHero/ProductHero";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import classes from "./ProductPage.module.scss";

const ProductDetails = ({ productId, variantId }) => {
  //NOTE - STATE MANAGEMENT
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // NOTE -  re-renders page if products changes
  useEffect(() => {
    // console.log("Products updated:", products); //preview CHANGED objects
  }, [products]);

  // NOTE -  RENDERING PRODUCT DATA ON PAGE

  if (!productId || !variantId) {
    //dummy placeholder product data if faulty ids/not found
    productId = "huda-beauty-creamy-kohl-eyeliner";
    variantId = "very-vanta";
  }

  // //todo - replace with updated variantData object from variantSelectForm
  // Find product with matching ID and variant - checks if it exists
  const product =
    products.length > 0 &&
    //returns matching element, is falsy if no match found
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
        <h2>Product Details</h2>
        <p>Product Details should display here</p>
        <section className={classes.container}>
          {loading && <p>Loading product details...</p>}
          {error && <p>Error loading product: {error}</p>}
          {product ? (
            <>
              <ProductHero productInfo={product} />
              <ProductDescription productDescription={product.description} />
            </>
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
      </main>
    </div>
  );
};

export default ProductDetails;

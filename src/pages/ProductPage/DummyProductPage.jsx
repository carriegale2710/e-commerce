import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./ProductPage.module.scss";

const ProductPage = () => {
  // Check loading and error states first
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) {
    return <div className={classes.loading}>Loading product details...</div>;
  }
  if (error) {
    return <div className={classes.error}>Error loading products: {error}</div>;
  }
  console.log("Available Products:", products);

  // Find product with matching ID and variant
  const productId = "huda-beauty-creamy-kohl-eyeliner";
  const variantId = "v/very-vanta";
  const product = products.find((product) => {
    console.log("Checking product:", product.id);
    if (product.id != productId) {
      return;
    }
    const hasVariant = product.variantData.some((variant) => {
      console.log("Checking variant:", variant.variantId);
      return variant.variantId === variantId;
    });
    if (product.id === productId && hasVariant) {
      console.log("found it!");
    }
    return product.id === productId && hasVariant && product;
  });

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
      <header className={classes.container}>
        <h1>Product page</h1>
        <p>
          This page will show details about a single product when clicked on
          from the Shop Page products grid, it will have a image gallery with
          carousel, with arrows to slides thru images; it will have a
          description, and information fetched by firestore API; it will also
          have a button to add to cart - should show up on Cart Page
        </p>
      </header>
      <main className={classes.container}>
        <ProductCard productInfo={product} />
        <section>
          <h1>User Reviews</h1>
          <p>
            Personal Bonus Idea for later: user Review section below the product
            details, with form to create a new review
          </p>
        </section>
      </main>
    </>
  );
};

export default ProductPage;

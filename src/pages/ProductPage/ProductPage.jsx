import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductDetails from "./ProductDetails";
import classes from "./ProductPage.module.scss";

/* NOTE - PRODUCT PAGE REQS:
This page will show details about a single product:
- navigates here when clicked on from a ProductCard
- should show the first variant as the default display upon entry
- has same elements from ProductCard, but with diff styling, and also:
  - should have image gallery with carousel, with arrows to slides thru images; 
  - should have a description; 
  - maybe user review section implemented later
*/

const ProductPage = () => {
  //const { products, productId, variantId } = useParams();
  // console.log("URL Parameters:", { productId, variantId });

  //const { products, loading, error } = useContext(ProductsContext);
  // console.log("Available Products:", products);

  // Check loading and error states first
  if (loading) {
    return <div className={classes.loading}>Loading product details...</div>;
  }

  if (error) {
    return <div className={classes.error}>Error loading products: {error}</div>;
  }
  // Find product with matching ID and variant
  const product = products?.find((product) => {
    console.log("Checking product:", product.id);
    const hasVariant = product.variantData.some((variant) => {
      console.log("Checking variant:", variant.variantId);
      return variant.variantId === variantId; // Using variantId consistently
    });
    return product.id === productId && hasVariant;
  });

  return (
    <>
      <header className={classes.container}>
        <h2>Product page</h2>
      </header>
      <main className={classes.container}>
        <section>
          <h2>Product Details</h2>
          <p>Product Details should display here</p>
          <ProductDetails />
        </section>
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

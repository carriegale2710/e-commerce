import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./ProductPage.module.scss";

const ProductPage = () => {
  return (
    <main className="classes.container">
      <section>
        <h1>Product page</h1>
        <p>
          This page will show details about a single product when clicked on
          from the Shop Page products grid
        </p>

        <p>
          it will have a image gallery with carousel, with arrows to slides thru
          images
        </p>
        <p>
          it will have a description, and information fetched by firestore API
        </p>
        <p>
          it will also have a button to add to cart - should show up on Cart
          Page
        </p>
        <ProductCard />
      </section>
      <section>
        <h1>User Reviews</h1>
        <p>
          Personal Bonus Idea for later: user Review section below the product
          details, with form to create a new review
        </p>
      </section>
    </main>
  );
};

export default ProductPage;

import React from "react";
import classes from "./ProductPage.module.scss";

const ProductPage = () => {
  return (
    <main className="classes.container">
      <h1>Product page</h1>
      <p>
        This page will show details about a single product when clicked on from
        the Shop Page products grid
      </p>
      <p>
        it will have a image gallery with carousel, with arrows to slides thru
        images
      </p>
      <p>
        it will have a description, and information fetched by firestore API
      </p>
      <p>
        it will also have a button to add to cart - should show up on Cart Page
      </p>
      <p>
        Bonus: user Review section below the product details, with form to
        create a new review
      </p>
    </main>
  );
};

export default ProductPage;

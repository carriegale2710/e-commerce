import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import classes from "./ShopPage.module.scss";

const ShopPage = () => {
  return (
    <main className={classes.container}>
      <h1>Shop Page</h1>
      <p>
        This is the shop page, the user can browser through a list of products
        here, scroll down and preview thumbnails of a list of products avaialble
      </p>
      <h2>MVP</h2>
      <p>Grid of products</p>
      <ProductList />
      <h2>Bonus</h2>
      <p>
        Bonus - have an short button 'Add to card' available on the thumbnail of
        each product
      </p>
      <p>
        Bonus: would be nice to have a modal display here when clicking 'Quick
        View' on each product
      </p>
    </main>
  );
};

export default ShopPage;

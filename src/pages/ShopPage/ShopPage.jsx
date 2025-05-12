import ProductsLoader from "../../containers/ProductsLoader/ProductsLoader";
import classes from "./ShopPage.module.scss";

const ShopPage = () => {
  return (
    <main className={classes.container}>
      <h1>Shop Page</h1>
      <div className={classes.header}>
        <p>
          This is the shop page, the user can browser through a list of products
          here, scroll down and preview thumbnails of a list of products
          avaialble
        </p>
      </div>
      <ProductsLoader />
    </main>
  );
};

export default ShopPage;

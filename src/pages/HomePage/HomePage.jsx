import ProductsLoader from "../../containers/ProductsLoader/ProductsLoader";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <main className={classes.container}>
      <div className={classes.header}>
        <h1>bestn’beaute</h1>
        <h2>Sale On Now!</h2>
      </div>
      <ProductsLoader />
    </main>
  );
};

export default HomePage;

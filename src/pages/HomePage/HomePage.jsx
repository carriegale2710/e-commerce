import ProductsLoader from "../../containers/ProductsLoader/ProductsLoader";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <header className="classes.header">
        <h1>Welcome</h1>
        <p>Introduce the website here</p>
      </header>
      <main className="classes.main">
        <h2>Featured Products</h2>
        <p>Some products, imagery here</p>
        <ProductsLoader />
      </main>
    </>
  );
};

export default HomePage;

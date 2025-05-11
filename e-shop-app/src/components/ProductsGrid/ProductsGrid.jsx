import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsGrid.module.scss";

const ProductsGrid = ({ products }) => {
  return (
    <div className={classes.grid}>
      {products.map((product) => {
        //console.log(`Loading ${product.name}`);
        return <ProductCard key={product.id} productInfo={product} />;
      })}
    </div>
  );
};

export default ProductsGrid;

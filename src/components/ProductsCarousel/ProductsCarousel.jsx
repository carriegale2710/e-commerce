import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsCarousel.module.scss";

const ProductsCarousel = ({ products }) => {
  return (
    <div className={classes.flex}>
      <h2>Featured Products</h2>
      <ul>
        {products.map((product, i) => {
          // console.log(`${product.id}_carousel_${i}`);
          return (
            <li key={`${product.id}_carousel_${i}`}>
              <ProductCard productInfo={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsCarousel;

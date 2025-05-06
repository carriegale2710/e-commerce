import React from "react";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ name, price, color }) => {
  return (
    <div className={classes.container}>
      <h2>{name}</h2>
      <p>image here</p>
      <p>{price.toFixed(2)}</p>
      <p>{color}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

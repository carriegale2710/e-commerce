import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./CartItemCard.module.scss";

const CartItemCard = ({ productData }) => {
  console.log(productData);
  const { cart, removeItemFromCart } = useContext(CartContext);

  const handleClick = () => {
    console.log("clicked");
    // addToCart(productData);
    removeItemFromCart(productData.id);
  };

  return (
    <>
      <div className={classes.card}>
        <span className={classes.details}>
          <a href={productData.productURL}>
            <h3>{productData.name}</h3>
          </a>
          <br />
          <p>Product Type: {productData.productType}</p>
          {/* <p>Rating: {productData.rating}</p> */}
          {/* {productData.imgURL.map((img) => {
            <a href={img}>Image Link </a>;
          })} */}
          {/* {productData.variants.map((v) => {
            <p>Shade: {v}</p>;
            })} */}
          <br />
          <p>${productData.price.toFixed(2)}</p>
          {/* <p>{productData.description}</p> */}
        </span>
        <button onClick={handleClick}>Remove from Cart</button>
      </div>
      <br />
    </>
  );
};

export default CartItemCard;

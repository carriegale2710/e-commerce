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
      <div className={`${classes.card}`}>
        <span className={classes.details}>
          <a href={productData.productURL}>
            <p>{productData.name}</p>
          </a>
          <br />
          <p>${productData.price.toFixed(2)}</p>
          <br />
        </span>
        <button className={classes.button} onClick={handleClick}>
          Remove
        </button>
      </div>
      <br />
    </>
  );
};

export default CartItemCard;

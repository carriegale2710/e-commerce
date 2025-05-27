import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import classes from "./CartItemCard.module.scss";

const CartItemCard = ({ productData }) => {
  //input - single specific product with a selectedVariant prop
  // console.log(productData);

  const { cart, removeItemFromCart } = useContext(CartContext);
  console.log("CURRENT CART");
  console.log(cart);

  const handleClick = () => {
    console.log("clicked");
    removeItemFromCart(productData.id);
  };

  return (
    <>
      <div className={`${classes.card}`}>
        <span className={classes.details}>
          <a href={productData.productURL}>
            <img src={productData.variantData.variantImgLink} alt="" />
            <h3>{productData.name}</h3>
          </a>
          <p>{`Shade: ${productData.variantData.variantName}`}</p>
          <p>${productData.price.toFixed(2)}</p>
          <p>Qty: {productData.quantity}</p>
        </span>
        {/* add counter for increment, decrement */}
        <button className={classes.button} onClick={handleClick}>
          Remove
        </button>
      </div>
      <br />
    </>
  );
};

export default CartItemCard;

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
            <h3>{productData.name}</h3>
          </a>
          <br />
          <p>Product Type: {productData.productType}</p>
          {/* <p>Rating: {productData.rating}</p> */}
          {/* {productData.imgURL.map((img) => {
            <a href={img}>Image Link </a>;
          })} */}
          {/* add a dropdown element for picking the product variant (shade)*/}
          <select name="variant-picker" id="variant-picker">
            <option value="1">
              Shade 1, In stock: {productData.stock[0]}{" "}
            </option>
            <option value="2">
              Shade 2, In stock: {productData.stock[1]}{" "}
            </option>
          </select>
          {/*{productData.variants.map((v) => {
            <p>Shade: {v}</p>;
            })} */}
          <br />
          <p>${productData.price.toFixed(2)}</p>
          <br />
          <p>Stock: {productData.stock.map((i) => `${i}, `)}</p>
          {/* <p>{productData.description}</p> */}
        </span>
        <button className={classes.button} onClick={handleClick}>
          Remove from Cart
        </button>
      </div>
      <br />
    </>
  );
};

export default CartItemCard;

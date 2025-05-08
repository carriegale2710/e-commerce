import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./CartPage.module.scss";
import CartList from "../../components/CartList/CartList";

const CartPage = () => {
  return (
    <main className={classes.container}>
      <h2>Your Cart Items</h2>
      <CartList />
      <h2>Checkout Form</h2>
    </main>
  );
};

export default CartPage;

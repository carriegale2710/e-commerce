import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./ProductForm.module.scss";

const ProductForm = ({ productInfo }) => {
  // props needed: product data user is interested in adding

  const [selectedVariant, setSelectedVariant] = useState(0);
  //const [isFavorited, setIsFavorited] = useState(false);
  const { addToCart, updateFavorited, favsList } = useContext(CartContext);
  const isFavorited = favsList.includes(productInfo.id);

  //for add to cart button click
  //   const handleClick = () => {
  //     console.log("addtocart clicked");
  //     const success = addToCart(productInfo, selectedVariant);
  //     if (!success) {
  //       alert("sorry, out of stock");
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("adding to cart!");
    //TODO - call addtoCart from cartContext here
    const success = addToCart(productInfo, selectedVariant);
    if (!success) {
      alert("sorry, out of stock");
    }
  };

  //for the favorite button click
  const toggleClick = () => {
    //console.log("favorite button clicked");
    if (!isFavorited) {
      console.log("added to favorites");
    } else {
      console.log("removed from favorites");
    }
    //setIsFavorited(!isFavorited);
    //add favoriteItem function from context here
    updateFavorited(productInfo.id);
  };

  const handleChange = () => {
    console.log("shade updated");
    //chnge the thumbnail image to vrint sleected
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* add a dropdown element for picking the product variant (shade)*/}
        <label htmlFor="variant-picker">Select shade</label> <br />
        <select
          onChange={handleChange}
          name="variant-picker"
          id="variant-picker"
        >
          <option value="1">Shade 1, In stock: {productInfo.stock[0]} </option>
          <option value="2">Shade 2, In stock: {productInfo.stock[1]} </option>
        </select>
        <p>${productInfo.price.toFixed(2)}</p>
        <button type="submit">Add to Cart</button>
      </form>

      <button
        className={`${classes.favButton} ${isFavorited ? classes.active : ""}`}
        onClick={toggleClick}
      >
        Fav
      </button>
    </div>
  );
};

export default ProductForm;

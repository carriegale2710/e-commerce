import { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import classes from "./ProductForm.module.scss";

const ProductForm = ({ productInfo, variantData }) => {
  // props needed: product data user is interested in adding
  // const allVariants = productInfo.variantData;
  // console.log(productInfo);
  //console.log(productInfo.name, variantData);

  const [selectedVariant, setSelectedVariant] = useState("");
  const { addItemToCart, updateFavoritedItems, favsList } =
    useContext(CartContext);
  const isFavorited = favsList.includes(productInfo.id);

  //for add to cart button click
  //   const handleClick = () => {
  //     console.log("addItemToCart clicked");
  //     const success = addItemToCart(productInfo, selectedVariant);
  //     if (!success) {
  //       alert("sorry, out of stock");
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Adding ${selectedVariant} to cart...`);
    //call addItemToCart from cartContext here
    const success = addItemToCart(productInfo, selectedVariant);
    if (!success) {
      alert(`Sorry, ${selectedVariant} is out of stock...`);
    } else {
      console.log(`${selectedVariant} added to cart!`);
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
    updateFavoritedItems(productInfo.id);
  };

  //handles variant-picker user selection
  const handleChange = (e) => {
    const newVariant = e.target.value; // Changed from e.value
    setSelectedVariant(newVariant);
    console.log(`shade updated to: ${newVariant}`);
    //chnge the thumbnail image to vrint sleected
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*dropdown element for picking the product variant (shade)*/}
        <label htmlFor="variant-picker">Select shade</label> <br />
        <select
          onChange={handleChange}
          name="variant-picker"
          id="variant-picker"
          value={selectedVariant}
        >
          {variantData.map((v) => {
            return (
              <option key={v.productVariantId} value={v.productVariantId}>
                Shade: {v.variantName}, In stock: {v.variantStockAvailable}{" "}
              </option>
            );
          })}
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

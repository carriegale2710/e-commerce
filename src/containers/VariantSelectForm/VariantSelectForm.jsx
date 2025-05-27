import { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import classes from "./VariantSelectForm.module.scss";

const VariantSelectForm = ({ productInfo, variantData }) => {
  // props needed: product data user is interested in adding
  // console.log(productInfo.name, variantData[0].variantId);

  const [selectedVariant, setSelectedVariant] = useState(
    variantData[0].variantId //default variant will be first one in list
  );
  const { addItemToCart, updateFavoritedItems, favsList } =
    useContext(CartContext);
  const isFavorited = favsList.includes(productInfo.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `You want to add "${productInfo.name}" with shade "${selectedVariant}" to cart...`
    );
    // console.log(productInfo.name, variantData[0].variantId);
    //TODO - add selected variantData
    const selectedVariantData = variantData.map((v) => {
      if (v.variantId == selectedVariant) {
        return v;
      }
    });
    // console.log(selectedVariantData[0]);

    //reformat productInfo
    const selectedProduct = productInfo;
    selectedProduct.variantData = selectedVariantData[0];

    //call addItemToCart from cartContext here
    const success = addItemToCart(selectedProduct); //FIXME - pass into data only for specified product variant?
    if (!success) {
      alert(`Sorry, ${selectedVariant} is out of stock...`);
    } else {
      console.log(`${selectedVariant} added to cart!`);
    }
  };

  //for the favorite button click
  const toggleClick = () => {
    if (!isFavorited) {
      console.log("added to favorites");
    } else {
      console.log("removed from favorites");
    }
    updateFavoritedItems(productInfo.id);
  };

  //handles variant-picker user selection
  const handleChange = (e) => {
    const newVariant = e.target.value;
    setSelectedVariant(newVariant);
    console.log(`shade updated to: ${newVariant}`);
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
          {variantData.map((v, index) => {
            return (
              <option
                key={`${productInfo.id}_${v.variantId}_${index}`}
                value={v.variantId}
              >
                Shade: {v.variantName}, In stock: {v.variantStockAvailable}{" "}
              </option>
            );
          })}
        </select>
        <button className={classes.addButton} type="submit">
          Add to Cart
        </button>
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

export default VariantSelectForm;

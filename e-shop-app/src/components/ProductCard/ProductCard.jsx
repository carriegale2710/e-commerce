import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ productInfo }) => {
  //console.log(productData);
  //destructure this: description, id,imgURL,name, price, productType,productURL, rating,stock, variants

  const [selectedVariant, setSelectedVariant] = useState(0);
  //const [isFavorited, setIsFavorited] = useState(false);
  const { addToCart, updateFavorited, favsList } = useContext(CartContext);
  const isFavorited = favsList.includes(productInfo.id);

  //for add to cart button click
  const handleClick = () => {
    console.log("addtocart clicked");
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

  return (
    <div className={classes.container}>
      <a href={productInfo.productURL}>
        <h3>{productInfo.name}</h3>
      </a>
      <p>{productInfo.name}</p>
      <p>Product Type: {productInfo.productType}</p>
      <p>Rating: {productInfo.rating}</p>
      {productInfo.imgURL.map((img) => (
        <a key={`img-${img}`} href={img}>
          Image Link{" "}
        </a>
      ))}
      {productInfo.variants.map((v) => (
        <p key={`variant-${v}`}>Shade: {v}</p>
      ))}
      <p>${productInfo.price.toFixed(2)}</p>
      {/* <p>{productData.description}</p> */}
      <button onClick={handleClick}>Add to Cart</button>
      <button
        className={`${classes.favButton} ${isFavorited ? classes.active : ""}`}
        onClick={toggleClick}
      >
        Fav
      </button>
    </div>
  );
};

export default ProductCard;

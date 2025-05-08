import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ productData }) => {
  //console.log(productData);
  //destructure this: description, id,imgURL,name, price, productType,productURL, rating,stock, variants

  const [selectedVariant, setSelectedVariant] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    console.log("clicked");
    const success = addToCart(productData, selectedVariant);
    if (!success) {
      alert("sorry, outof stock");
    }
  };

  return (
    <div className={classes.container}>
      <a href={productData.productURL}>
        <h3>{productData.name}</h3>
      </a>
      <p>{productData.name}</p>
      <p>Product Type: {productData.productType}</p>
      <p>Rating: {productData.rating}</p>
      {productData.imgURL.map((img) => (
        <a key={`img-${img}`} href={img}>
          Image Link{" "}
        </a>
      ))}
      {productData.variants.map((v) => (
        <p key={`variant-${v}`}>Shade: {v}</p>
      ))}
      <p>${productData.price.toFixed(2)}</p>
      {/* <p>{productData.description}</p> */}
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

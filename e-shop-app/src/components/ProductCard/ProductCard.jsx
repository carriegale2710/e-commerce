import classes from "./ProductCard.module.scss";
import ProductForm from "../ProductForm/ProductForm";

const ProductCard = ({ productInfo }) => {
  //console.log(productData);
  //destructure this: description, id,imgURL,name, price, productType,productURL, rating,stock, variants

  productInfo.imgURL.map((imgLink) => {
    console.log(imgLink);
  });

  return (
    <div className={classes.container}>
      <a href={productInfo.productURL}>
        <h3>{productInfo.name}</h3>
      </a>
      <p>Rating: {productInfo.rating}</p>
      {productInfo.imgURL.map((img) => (
        <a key={`img-${img}`} href={img}>
          Image Link{" "}
        </a>
      ))}
      <ProductForm productInfo={productInfo} />
    </div>
  );
};

export default ProductCard;

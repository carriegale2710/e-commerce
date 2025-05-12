import classes from "./ProductCard.module.scss";
import ProductForm from "../ProductForm/ProductForm";

const ProductCard = ({ productInfo }) => {
  //console.log(productInfo);
  const allVariants = productInfo.variantData;
  //console.log(allVariants);

  return (
    <div className={classes.container}>
      <a href={productInfo.productURL}>
        <h3>{productInfo.name}</h3>
      </a>
      <p>Rating: {productInfo.rating}</p>
      <div
        style={{
          backgroundImage: `url(${allVariants[0].variantImgLink})`,
        }}
      ></div>
      <ProductForm
        productInfo={productInfo}
        variantData={productInfo.variantData}
      />
    </div>
  );
};

export default ProductCard;

// {/* {productInfo.imgURL.map((img) => (
//   <a key={`img-${img}`} href={img}>
//     Image Link{" "}
//   </a> */}
// ))}

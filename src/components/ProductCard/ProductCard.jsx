import { NavLink } from "react-router-dom";
import ProductForm from "../ProductForm/ProductForm";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ productInfo }) => {
  //console.log("Product Info:", productInfo); // Check full product data
  //console.log("Product ID:", productInfo.id); // Verify ID exists
  //console.log("Default Variant:", productInfo.variantData[0]); // Check variant data

  //console.log(productInfo);
  const allVariants = productInfo.variantData;
  const defaultVariant = allVariants[0];
  //console.log(defaultLink);

  return (
    <div className={classes.container}>
      <NavLink to={`/products/${productInfo.id}/${defaultVariant.variantId}`}>
        <h4>{productInfo.name}</h4>
      </NavLink>
      <img
        src={allVariants[0].variantImgLink}
        alt={allVariants[0].variantName}
      />
      <p>Rating: {productInfo.rating}</p>
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

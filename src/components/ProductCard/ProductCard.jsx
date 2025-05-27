import { NavLink } from "react-router-dom";
import VariantSelectForm from "../../containers/VariantSelectForm/VariantSelectForm";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ productInfo }) => {
  // console.log("Product Info:", productInfo); // Check full product data
  const allVariants = productInfo.variantData;
  const defaultVariant = allVariants[0];

  return (
    <div className={classes.container}>
      <NavLink to={`/products/${productInfo.id}/${defaultVariant.variantId}`}>
        <span className={classes.thumbnail}>
          <img
            src={allVariants[0].variantImgLink}
            alt={allVariants[0].variantName}
          />
          <p className={classes.title}>
            {productInfo.name} <br /> Rating: {productInfo.rating}
          </p>
        </span>
      </NavLink>
      <VariantSelectForm
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

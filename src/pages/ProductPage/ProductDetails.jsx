import ProductHero from "../../components/ProductHero/ProductHero";

const ProductDetails = ({ productInfo }) => {
  return (
    <div>
      <ProductHero productInfo={productInfo} />
    </div>
  );
};

export default ProductDetails;

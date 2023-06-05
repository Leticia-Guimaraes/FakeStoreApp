import "./styles.css";
import Labeling from "./Components/Labeling";
import ProductCard from "../CardsOfProduct/ProductCard";
import Currency from "./Components/Currency";
import StarRating from "./Components/StarRating";

const ProductDetails = () => {
  return (
    <div className="productContainer">
      <div className="productIllustration">
        <h1>{"Uma plantinha verde"}</h1>
        <ProductCard img={""} />
      </div>

      <div className="productDetails">
        <Currency />
        <div className="description">
          <Labeling title={"blablabla"} description={"ahahah"} />
          <Labeling title={"ugaugauga"} description={""} />
        </div>
        <Currency />
        <div className="description">
          <Labeling description={"kakakaka"} />
          <Labeling title={"lululu"} description={"luli"} />
        </div>
        <Currency />
        <div className="description">
          <div className="stars">
            <StarRating />
          </div>

          <Labeling description={"aaaaaaaaaaaa"} />
        </div>
        <Currency />
      </div>
    </div>
  );
};

export default ProductDetails;

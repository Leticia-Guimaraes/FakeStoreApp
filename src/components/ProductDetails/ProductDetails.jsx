import "./styles.css";
import Labeling from "./Components/Labeling";
import ProductCard from "../CardsOfProduct/ProductCard";
import Currency from "./Components/Currency";
import StarRating from "./Components/StarRating";
import { getProductById } from "../../services/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ title, price }) => {
  const pictures = [
    "https://i.pinimg.com/564x/60/1b/f8/601bf865cad153c1914fe75271b4b5d0.jpg",
  ];
  const [products, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="productContainer">
      <div className="productIllustration">
        <h1>{products.title}</h1>
        <ProductCard img={products.image} />
      </div>
      <div>
        <div className="stars">
          <p>{"Marca:" + products.title}</p>
          <StarRating productId={products.rate} />
        </div>

        <div className="productDetails">
          <p>{products.price}</p>
          <p>{"descrição"}</p>
          <p>{"title"}</p>
        </div>

        <div className="descriptions">
          <ul>
            <li>
              <span className="item">
                <span className="detailTitle">Marca: </span>
                <span className="detail">{"Marca"}</span>
              </span>
            </li>
            <li>
              <span className="item">
                <span className="detailTitle">Material: </span>
                <span className="detail">{"Material"}</span>
              </span>
            </li>
            <li>
              <span className="item">
                <span className="detailTitle">Dimensões do Produto: </span>
                <span className="detail">{"Dimensões do Produto"}</span>
              </span>
            </li>
            <li>
              <span className="item">
                <span className="detailTitle">Tipo de montagem: </span>
                <span className="detail">{"Tipo de montagem"}</span>
              </span>
            </li>
            <li>
              <span className="item">
                <span className="detailTitle">Tipo de acabamento: </span>
                <span className="detail">{"Tipo de acabamento"}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

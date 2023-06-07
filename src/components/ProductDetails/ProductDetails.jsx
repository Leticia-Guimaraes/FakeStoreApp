import "./styles.css";
import ProductCard from "../CardsOfProduct/ProductCard";
import StarRating from "./Components/StarRating";
import { getProductById } from "../../services/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
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
      <div className="descriptionContainer">
        <div className="stars">
          <p>{"Marca: " + products.title}</p>
          <StarRating productId={products.rate} />
        </div>

        <div className="productDetails">
          <span>{"R$ " + products.price}</span>
          <p>{"Descrição do produto"}</p>
          <p>{"Descrição do produto"}</p>
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

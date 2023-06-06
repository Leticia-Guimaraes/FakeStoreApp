import "./styles.css";
import ProductCard from "../CardsOfProduct/ProductCard";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { allProducts } from "../../services/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    allProducts()
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className="productsContainer">
      <div className="searches">
        <div className="search">
          <input placeholder="Procurando por algum produto?"></input>
          <button>
            <BsSearch />
          </button>
        </div>
        <select className="select">
          <option>Selecione uma categoria</option>
          <option>Electronics</option>
          <option>Jewelery</option>
          <option>Men's clothing</option>
          <option>Women's clothing</option>
        </select>
      </div>

      <h1 id="title">Products List</h1>

      <div className="productsCards">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;

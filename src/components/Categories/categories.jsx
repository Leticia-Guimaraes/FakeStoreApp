import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductCard from "../CardsOfProduct/ProductCard";
import { getCategories } from "../../services/products";
import { useEffect, useState } from "react";

const Categories = () => {
  const pictures = [
    "https://i.pinimg.com/564x/60/1b/f8/601bf865cad153c1914fe75271b4b5d0.jpg",
    "https://i.pinimg.com/564x/cf/48/c0/cf48c047c06e000524ed7ad31813cc0a.jpg",
    "https://i.pinimg.com/564x/d3/2e/70/d32e70c07002fc81707de8fe56114265.jpg",
    "https://i.pinimg.com/564x/8a/aa/7a/8aaa7a9735e75da42bf2bd88af43e4c7.jpg",
  ];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((result) => {
        setCategories(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className="categoriesContainer">
      <div className="titleCategories">
        <h1>Categories</h1>
        <p>Find what you are looking for</p>
      </div>
      <div className="categoryCards">
        {categories.map((category, i) => {
          return <ProductCard key={i} img={pictures[i]} title={category} />;
        })}
      </div>
      <div>
        <p></p>
      </div>
      <Link to={"Products"}>
        <button>
          Explore <BsArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Categories;

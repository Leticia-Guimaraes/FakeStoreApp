import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../CardsOfProduct/ProductCard";
import { useState, useEffect } from "react";
import { ratedProducts } from "../../services/products";
import { Link } from "react-router-dom";

const Showcase = () => {
  const [cards, setCards] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const cardsData = await ratedProducts();
      setCards(cardsData);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <div className="showcaseContainer">
      <div className="bestSellers">
        <h1>Best Sellers</h1>
        <p>The easiest way to find the most wanted products</p>
        <Link to={"Products"}>
          <button>
            See more
            <BsArrowRight />
          </button>
        </Link>
      </div>
      {cards?.map((card) => {
        return (
          <Link id="link" key={card.id} to={`/product/${card.id}`}>
            <ProductCard
              id="ProductCard"
              img={card.image}
              title={card.title}
              price={card.price}
            />
          </Link>
        );
      })}
      {/* <ProductCard img={""} title={""} price={""} />

      <ProductCard img={""} title={""} price={""} />

      <ProductCard img={""} title={""} price={""} /> */}
    </div>
  );
};

export default Showcase;

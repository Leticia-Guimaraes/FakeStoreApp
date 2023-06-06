import "./styles.css";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../CardsOfProduct/ProductCard";
import { useState, useEffect } from "react";
import { ratedProducts } from "../../services/products";

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
        <button>
          See more
          <BsArrowRight />
        </button>
      </div>
      {cards?.map((card) => {
        return (
          <ProductCard
            id="ProductCard"
            img={card.image}
            title={card.title}
            price={card.price}
          />
        );
      })}
      {/* <ProductCard img={""} title={""} price={""} />

      <ProductCard img={""} title={""} price={""} />

      <ProductCard img={""} title={""} price={""} /> */}
    </div>
  );
};

export default Showcase;

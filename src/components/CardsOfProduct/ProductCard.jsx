import "./styles.css";
const ProductCard = ({ img, title, price }) => {
  return (
    <div className="productCard">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{"R$ " + price}</p>
    </div>
  );
};

export default ProductCard;

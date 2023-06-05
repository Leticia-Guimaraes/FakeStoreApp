import "./style.css";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="container">
      <Logo />

      <ul className="homeUl">
        <NavLink className="navLink" to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink className="navLink" to={"/products"}>
          <li>Products</li>
        </NavLink>
        <li>Contacts</li>
      </ul>

      <div className="headerIcons">
        <AiOutlineShoppingCart />
        <AiOutlineUser />
        <div id="currency"></div>
        <BsFilterRight />
      </div>
    </header>
  );
};

export default Header;

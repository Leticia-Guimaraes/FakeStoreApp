import "./style.css"
import { AiOutlineShoppingCart , AiOutlineUser } from 'react-icons/ai'
import { BsFilterRight } from 'react-icons/bs'
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="container">
  
        <Logo />

          <ul className="homeUl">
            <li>Home</li>
            <li>Products</li>
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
import "./component_style.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const MainArea = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function HandleSearchBarValue(event) {
    setSearchTerm(event.target.value);
  }

  function HandleSearch() {
    history.push(`/search/${searchTerm}`);
  }

  return (
    <div className="MainArea">
      <div className="categorySelector">Categories</div>
      <div className="SearchBar">
        <input
          type="search"
          placeholder="Search for product...."
          onChange={HandleSearchBarValue}
          value={searchTerm}
        />
        <button onClick={HandleSearch}>Search</button>
      </div>
    </div>
  );
};

const MainHeader = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <>
      <div className="MainHeaderContainer">
        <div className="HeaderLogo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="MainHeader">
          <Link to="/">
            <li>
              <FontAwesomeIcon icon={faHome} />
            </li>
          </Link>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <Link to={"/Cart"}>
            <li id="cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="cartLength">{cartItems.length}</div>
            </li>
          </Link>
          <li id="favorites">
            <FontAwesomeIcon icon={faHeart} />
          </li>
        </ul>
      </div>

      <MainArea />
    </>
  );
};

export default MainHeader;

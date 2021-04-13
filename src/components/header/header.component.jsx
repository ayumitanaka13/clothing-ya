import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ClothingYa.png";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
      </div>
    </div>
  );
};

export default Header;

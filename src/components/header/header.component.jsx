import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Logo from "../../assets/ClothingYa.png";
import { auth } from "../../firebase/firebase.util";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.styles.scss";

const Header = ({ currentUser, hiddenProps }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <Link className="option" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
        {hiddenProps ? null : <CartDropdown cartItems={[]} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hiddenProps: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);

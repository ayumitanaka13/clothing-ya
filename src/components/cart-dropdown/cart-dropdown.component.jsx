import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItemProps }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItemProps.length ? (
          cartItemProps.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);

import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHiddenProps, itemCount }) => {
  // for loop
  // let totalQuantity = 0;
  // for (let i = 0; i < cartItemProps.length; i++) {
  //   const item = cartItemProps[i];
  //   totalQuantity += item.quantity;
  // }

  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHiddenProps} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProps: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
});

// const mapStateToProps = (state) => ({
//   cartItemProps: state.cart.cartItems,
// });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

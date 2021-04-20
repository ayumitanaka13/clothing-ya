import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCounts } from "../../redux/cart/cart.selector";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHiddenProps, itemCount }) => {
  // for loop
  // let totalQuantity = 0;
  // for (let i = 0; i < cartItemProps.length; i++) {
  //   const item = cartItemProps[i];
  //   totalQuantity += item.quantity;
  // }

  return (
    <CartContainer onClick={toggleCartHiddenProps}>
      <ShoppingIcon />
      <itemCount>{itemCount}</itemCount>
    </CartContainer>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
// });

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCounts,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProps: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

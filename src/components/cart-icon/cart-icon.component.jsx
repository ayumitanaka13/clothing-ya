import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useReactiveVar } from "@apollo/client";

// import './cart-icon.styles.scss'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

// import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCounts } from "../../redux/cart/cart.selector";
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { cartHiddenVar } from "../../graphql/cache";

const CartIcon = ({ itemCount }) => {
  const cartHidden = useReactiveVar(cartHiddenVar);
  return (
    <CartContainer onClick={() => cartHiddenVar(!cartHidden)}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
    //     <div className="cart-icon">
    //         <ShoppingIcon className="shopping-icon" onClick={toggleCartHiddenProps} />
    //         <span className="item-count">{itemCount}</span>
    //     </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
// })

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCounts,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHiddenProps: () => dispatch(toggleCartHidden()),
// })

export default connect(mapStateToProps)(CartIcon);

// //summing an array of numbers
// function sumOfQuantity(arr){
//     let sum = 0;
//     for(const item of arr){
//         sum += item.quantity
//     }
//     return sum
// }

// sumOfQuantity([{id:1, quantity: 2}, {id:2, quantity: 5}]) //7

//reduce function
// function sumOfQuantity(arr){
//     const reducer = (sum, item) => sum + item.quantity
//     const initVal = 0;
//     return arr.reduce(reducer, initVal)
// }

// sumOfQuantity([{id:1, quantity: 2}, {id:2, quantity: 5}]) //7

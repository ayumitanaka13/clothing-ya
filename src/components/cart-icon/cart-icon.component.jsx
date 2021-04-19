import React from 'react'
import { connect } from 'react-redux'

// import './cart-icon.styles.scss'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHiddenProps, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
  //     <div className="cart-icon">
  //         <ShoppingIcon className="shopping-icon" onClick={toggleCartHiddenProps} />
  //         <span className="item-count">{itemCount}</span>
  //     </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProps: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

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

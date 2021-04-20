import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// import './cart-dropdown.styles.scss'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles'

import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
// import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({ cartItemProps, history, dispatch }) => {
  console.log(history)
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItemProps.length ? (
          cartItemProps.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

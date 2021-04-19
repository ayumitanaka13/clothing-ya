import React from 'react'
import { connect } from 'react-redux'

// import './cart-dropdown.styles.scss'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles'

import CartItem from '../cart-item/cart-item.component'
// import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({ cartItemProps }) => {
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
      <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)

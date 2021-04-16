import React from 'react'
import { connect } from 'react-redux'

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import { CartDropdownContainer, CartDropdownButton } from './cart-dropdown.styles'

const CartDropdown = ({ cartItemProps }) => {
  return (
    <CartDropdownContainer>
      <div className='cart-items'>
        {cartItemProps.length ? (
          cartItemProps.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartDropdown)

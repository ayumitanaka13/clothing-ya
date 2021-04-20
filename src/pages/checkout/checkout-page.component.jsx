import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout-page.styles'

import {
  selectCartTotal,
  selectCartItems,
} from '../../redux/cart/cart.selector'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>

    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVC: 123
    </WarningContainer>

    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)

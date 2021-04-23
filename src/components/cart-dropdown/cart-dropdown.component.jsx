import React from 'react'
import { withRouter } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client'

// import './cart-dropdown.styles.scss'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles'

import CartItem from '../cart-item/cart-item.component'
import { cartHiddenVar, cartItemsVar } from '../../graphql/cache'

const CartDropdown = ({ history }) => {
  const cartHidden = useReactiveVar(cartHiddenVar)
  const cartItems = useReactiveVar(cartItemsVar)
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout')
          cartHiddenVar(!cartHidden)
        }}
      >GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  )
}

export default withRouter(CartDropdown)



// import React from 'react'
// import { connect } from 'react-redux'
// import {createStructuredSelector} from 'reselect'
// import { withRouter } from 'react-router-dom'

// // import './cart-dropdown.styles.scss'
// import {
//   CartDropdownContainer,
//   CartDropdownButton,
//   EmptyMessageContainer,
//   CartItemsContainer,
// } from './cart-dropdown.styles'

// import CartItem from '../cart-item/cart-item.component'
// import { selectCartItems } from '../../redux/cart/cart.selector'
// import { toggleCartHidden } from '../../redux/cart/cart.actions'
// // import CustomButton from '../custom-button/custom-button.component'

// const CartDropdown = ({ cartItemProps, history, dispatch }) => {
//   console.log(history)
//   return (
//     <CartDropdownContainer>
//       <CartItemsContainer>
//         {cartItemProps.length ? (
//           cartItemProps.map((cartItem) => (
//             <CartItem key={cartItem.id} item={cartItem} />
//           ))
//         ) : (
//           <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
//         )}
//       </CartItemsContainer>
//       <CartDropdownButton
//         onClick={() => {
//           history.push('/checkout')
//           dispatch(toggleCartHidden())
//         }}
//       >GO TO CHECKOUT</CartDropdownButton>
//     </CartDropdownContainer>
//   )
// }

// const mapStateToProps = createStructuredSelector({
//   cartItemProps: selectCartItems
// })

// export default withRouter(connect(mapStateToProps)(CartDropdown))



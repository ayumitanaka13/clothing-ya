import React from 'react' 
import { connect } from 'react-redux'

import './cart-icon.styles.scss'

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHiddenProps}) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHiddenProps} />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({ 
    toggleCartHiddenProps: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN } from './cart.actions';

//initial state
const INITIAL_STATE = {
    cartItems: [],
    hidden: false
}

//reducer function
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state
    }
}

export default cartReducer
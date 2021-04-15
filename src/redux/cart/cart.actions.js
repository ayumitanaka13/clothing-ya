//action types
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'


//action creators
export const addItem = (item) => ({
    type: ADD_CART_ITEM,
    payload: item
})

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})
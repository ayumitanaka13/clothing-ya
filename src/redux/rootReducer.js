import { combineReducers } from 'redux'
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer
})

// export default rootReducer
export default persistReducer(persistConfig, rootReducer)
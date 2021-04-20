import { combineReducers } from 'redux'
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'directory', 'shop']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer,
    user: userReducer
})

// export default rootReducer
export default persistReducer(persistConfig, rootReducer)
import { combineReducers, createStore } from '@reduxjs/toolkit';

import { userReducer, productsReducer, cartReducer } from './reducers';


const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer
})
export const store = createStore(rootReducer);



export type RootState = ReturnType<typeof rootReducer>
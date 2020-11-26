import {SIGN_IN, ADD_TO_CART, FETCH_SUCCESS, SIGN_UP} from './actions'


export const SIGN_IN_USER = (user:any) => ({type: SIGN_IN, payload: { user }});

export const ADD_ITEM_TO_CART = (product:any) => ({type: ADD_TO_CART, payload: { product }});

export const POPULATE_PRODUCTS = (products:object[]) => ({type: FETCH_SUCCESS, payload: products });

export const SIGN_UP_USER = (user:any) => ({type: SIGN_UP, payload: { user }});
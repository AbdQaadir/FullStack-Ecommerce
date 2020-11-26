

import {SIGN_IN, ADD_TO_CART, FETCH_SUCCESS} from './actions'

interface UserProps {
  name: string;
  username: string;
  email: string;
}
const initialUserState = {
  name: "",
  username: "",
  email: "",
}
export const userReducer = (state:UserProps = initialUserState, action:any) => {
  if(action.type === SIGN_IN){
    return {...state, ...action.payload}
  }else{
    return state;
  }
}

export const cartReducer = (state = [], action:any) => {
  if(action.type === ADD_TO_CART ){
    return [...state, {...action.payload}]
  }
  return state;
}

export const productsReducer = (state = [], action:any) => {
  if(action.type === FETCH_SUCCESS){
    return [...state, ...action.payload];
  }
  return state;
}
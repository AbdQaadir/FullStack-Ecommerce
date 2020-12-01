import { createSlice } from '@reduxjs/toolkit';

// CART REDUCER
const getParsedCart = () => JSON.parse(localStorage.getItem("qoat_cart") || '[]');
const setStringifyCart = (cart: object[]) => localStorage.setItem("qoat_cart", JSON.stringify(cart));
const initialState:any = getParsedCart();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action){
            const {product, id, quantity} = action.payload;
            if([...state].find((item:any) => +item.id === +id)){
                const filtered = [...state.filter((item:any) => +item.id !== +id)];
                setStringifyCart(filtered);
                return getParsedCart();
            }
            else{
                localStorage.setItem("qoat_cart", JSON.stringify([...state, {...product, quantity}]));
                return getParsedCart();
            }
        }
    }
})

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
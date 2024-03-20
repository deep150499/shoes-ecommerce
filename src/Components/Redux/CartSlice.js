import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems : [],
    totalAmount: 0,
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart(state,action) {
            state.cartItems.push(action.payload);
        },

        removeFromCart(state,action) {
            state.cartItems = state.cartItems.filter(x => x.id !== action.payload.id);
        },
        cartTotalAmount(state) {
          let {totalAmount} = state.cartItems.reduce((cartTotal,cartItem) => {
            const {price} = cartItem;
            cartTotal.totalAmount += price;

            return cartTotal;
          },
          {
            totalAmount : 0
          });
            state.totalAmount = parseInt(totalAmount.toFixed(2));
        },
    }
});

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;
export const {removeFromCart} = cartSlice.actions;
export const {cartTotalAmount} = cartSlice.actions;
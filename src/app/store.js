import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../features/product/productSlice.js'
import authSlice from '../features/auth/authslice.js'
import cartSlice from '../features/cart/cartSlice.js';
import addressSlice from '../features/address/addressSlice.js'
import orderSlice from '../features/order/orderSlice.js'
export const store = configureStore({
    reducer:{ 
        product: productSlice,
        auth: authSlice,
        cart : cartSlice,
        address: addressSlice,
        orders: orderSlice
    }
})
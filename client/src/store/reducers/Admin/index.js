import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

const adminProductsSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload
        },
        addProduct(state, action) {
            state.products.push(action.payload)
        },
        editProduct(state, action) {
            const productIndex = state.products.findIndex(product => product.id == action.payload.id)
            state.products[productIndex] = action.payload
        },
        removeProduct(state, action) {
            state.products = state.products.filter(product => product.id != action.payload)
        }
    }
});

export const { setProducts, addProduct, editProduct, removeProduct } = adminProductsSlice.actions;

export default adminProductsSlice.reducer;
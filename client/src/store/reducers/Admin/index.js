import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    categories: []
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
        },

        setCategories(state, action) {
            state.categories = action.payload
        },
        addCategory(state, action) {
            state.categories.push(action.payload)
        },
        editCategory(state, action) {
            const categoryIndex = state.categories.findIndex(category => category.id == action.payload.id)
            state.categories[categoryIndex] = action.payload
        },
        removeCategory(state, action) {
            state.categories = state.categories.filter(category => category.id != action.payload)
        }
    }
});

export const { 
    setProducts, 
    addProduct, 
    editProduct, 
    removeProduct,
    setCategories, 
    addCategory, 
    editCategory, 
    removeCategory 
} = adminProductsSlice.actions;

export default adminProductsSlice.reducer;
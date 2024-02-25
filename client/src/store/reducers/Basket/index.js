import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsBasket: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        setProductsBasket(state, action) {
            state.productsBasket = action.payload
        },
        changeCountProduct(state, action) {
            const productIndex = state.productsBasket.findIndex(product => product.id == action.payload.productId)
            state.productsBasket[productIndex].count += action.payload.valueCount
        },
        addProductToBasket(state, action) {
            state.productsBasket.push(action.payload)
        },
        deleteProduct(state, action) {
            state.productsBasket = state.productsBasket.filter(product => product.id != action.payload)
        }
    }
});

export const { setProductsBasket, changeCountProduct, addProductToBasket, deleteProduct } = basketSlice.actions;

export default basketSlice.reducer;
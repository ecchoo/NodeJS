import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modalCreateProductSlice = createSlice({
    name: 'modalCreateProduct',
    initialState: initialState,
    reducers: {
        setIsOpenModalCreateProduct(state, action) {
            state.isOpen = action.payload
        },
    }
});

export const { setIsOpenModalCreateProduct } = modalCreateProductSlice.actions;

export default modalCreateProductSlice.reducer;
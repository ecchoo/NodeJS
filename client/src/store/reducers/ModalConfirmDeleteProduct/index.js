import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    productId: null,
};

const modalConfirmDeleteProductSlice = createSlice({
    name: 'modalConfirmDeleteProduct',
    initialState: initialState,
    reducers: {
        setIsOpenModalConfirmDeleteProduct(state, action) {
            state.isOpen = action.payload
        },
        setDeleteProductid(state, action) {
            state.productId = action.payload
        }
    }
});

export const { setIsOpenModalConfirmDeleteProduct, setDeleteProductid } = modalConfirmDeleteProductSlice.actions;

export default modalConfirmDeleteProductSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    productId: null,
};

const modalUpdateProductSlice = createSlice({
    name: 'modalUpdateProduct',
    initialState: initialState,
    reducers: {
        setIsOpenModalUpdateProduct(state, action) {
            state.isOpen = action.payload
        },
        setUpdateProductId(state, action){
            state.productId = action.payload
        }
    }
});

export const { setIsOpenModalUpdateProduct, setUpdateProductId } = modalUpdateProductSlice.actions;

export default modalUpdateProductSlice.reducer;
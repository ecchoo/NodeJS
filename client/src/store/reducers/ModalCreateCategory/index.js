import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modalCreateCategorySlice = createSlice({
    name: 'modalCreateCategory',
    initialState: initialState,
    reducers: {
        setIsOpenModalCreateCategory(state, action) {
            state.isOpen = action.payload
        },
    }
});

export const { setIsOpenModalCreateCategory } = modalCreateCategorySlice.actions;

export default modalCreateCategorySlice.reducer;
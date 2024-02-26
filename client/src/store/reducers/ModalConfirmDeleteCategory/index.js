import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    categoryId: null,
};

const modalConfirmDeleteCategorySlice = createSlice({
    name: 'modalConfirmDeleteCategory',
    initialState: initialState,
    reducers: {
        setIsOpenModalConfirmDeleteCategory(state, action) {
            state.isOpen = action.payload
        },
        setDeleteCategoryId(state, action) {
            state.categoryId = action.payload
        }
    }
});

export const { setIsOpenModalConfirmDeleteCategory, setDeleteCategoryId } = modalConfirmDeleteCategorySlice.actions;

export default modalConfirmDeleteCategorySlice.reducer;
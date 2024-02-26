import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    categoryId: null,
};

const modalUpdateCategorySlice = createSlice({
    name: 'modalUpdateCategory',
    initialState: initialState,
    reducers: {
        setIsOpenModalUpdateCategory(state, action) {
            state.isOpen = action.payload
        },
        setUpdateCategoryId(state, action){
            state.categoryId = action.payload
        }
    }
});

export const { setIsOpenModalUpdateCategory, setUpdateCategoryId } = modalUpdateCategorySlice.actions;

export default modalUpdateCategorySlice.reducer;
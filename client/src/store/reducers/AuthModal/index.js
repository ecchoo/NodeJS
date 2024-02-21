import { AUTH_FORMS } from "@/constants/authForms";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    activeForm: AUTH_FORMS.LOGIN
};

const authModalSlice = createSlice({
    name: 'authModal',
    initialState: initialState,
    reducers: {
        setIsOpen(state, action) {
            state.isOpen = action.payload
        },
        setActiveForm(state, action){
            state.activeForm = action.payload
        }
    }
});

export const { setIsOpen, setActiveForm } = authModalSlice.actions;

export default authModalSlice.reducer;
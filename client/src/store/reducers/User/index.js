import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    token: null
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setName(state, action){
            state.name = action.payload
        },
        setToken(state, action){
            state.token = action.payload
        },
    }
});

export const { setName, setToken } = userSlice.actions;

export default userSlice.reducer;
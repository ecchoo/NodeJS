import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    token: null,
    name: null,
    email: null,
    role: null
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.token = action.payload.token
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
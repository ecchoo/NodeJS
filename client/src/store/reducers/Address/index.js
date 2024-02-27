import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    city: null,
    street: null,
    numberHouse: null,
    building: null,
    structure: null,
    fraction: null,
    numberApartament: null
};

const addressSlice = createSlice({
    name: 'address',
    initialState: initialState,
    reducers: {
        setAddress(state, action) {
            state.id = action.payload.id
            state.city = action.payload.city
            state.street = action.payload.street
            state.numberHouse = action.payload.numberHouse
            state.building = action.payload.building
            state.structure = action.payload.structure
            state.fraction = action.payload.fraction
            state.numberApartament = action.payload.numberApartament
        },
    }
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
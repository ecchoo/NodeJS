import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Authorization', `Bearer ${getState().user.token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchProfile: builder.query({
            query: (params) => ({
                url: '/profile',
                params: params
            })
        })
    })
})

export const { useFetchProfileQuery } = profileApi

export const createAddress = async ({
    token,
    city,
    street,
    numberHouse,
    building,
    structure,
    fraction,
    numberApartament
}) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/profile/createAddress`, {
        token,
        city,
        street,
        numberHouse,
        building,
        structure,
        fraction,
        numberApartament
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const updateAddress = async ({
    token,
    id,
    city,
    street,
    numberHouse,
    building,
    structure,
    fraction,
    numberApartament
}) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/profile/updateAddress`, {
        id,
        city,
        street,
        numberHouse,
        building,
        structure,
        fraction,
        numberApartament
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const updatePersonalData = async ({ token, name, email }) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/profile/updatePersonalData`, {
        name,
        email
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}
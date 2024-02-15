import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const basketAPI = createApi({
    reducerPath: 'basketApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        fetchBasket: builder.query({
            query: (params) => ({
                url: '/basket/',
                params: params
            }),
        })
    }),
})

export const addToBasket = async (productId, count) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/basket/add`, {
        productId,
        count
    })

    return data
}

export const updateCount = async (productId, value) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/basket/updateCount`, {
        productId,
        value
    })

    return data
}

export const deleteProductBasket = async (productId) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/basket/delete`, {
        data: {
            productId
        }
    })

    return data
}

export const { useFetchBasketQuery } = basketAPI

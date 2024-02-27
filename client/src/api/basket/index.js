import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

// export const basketApi = createApi({
//     reducerPath: 'basketApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: process.env.REACT_APP_API_URL,
        // prepareHeaders: (headers, { getState }) => {
        //     headers.set('Content-Type', 'application/json');
        //     headers.set('Authorization', `Bearer ${getState().user.token}`);
        //     return headers;
        // },
//     }),
//     endpoints: (builder) => ({
//         fetchBasket: builder.query({
//             query: (params) => ({
//                 url: '/basket/',
//                 params: params
//             }),
//         })
//     }),
// })

// export const { useFetchBasketQuery } = basketApi

export const getBasket = async (token) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/basket`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const addToBasket = async (token, productId, count) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/basket/add`, {
        productId,
        count
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const updateCount = async (token, productId, value) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/basket/updateCount`, {
        productId,
        value
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const deleteProductBasket = async (token, productId) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/basket/delete`, {
        data: {
            productId
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const order = async (token) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/order`, {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}
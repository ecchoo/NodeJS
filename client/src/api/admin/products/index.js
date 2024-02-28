import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const adminProductsApi = createApi({
    reducerPath: 'adminProductsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Authorization', `Bearer ${getState().user.token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchAdminProducts: builder.query({
            query: (params) => ({
                url: '/admin/products/',
                params: params
            }),
        }),
        fetchAdminProductById: builder.query({
            query: (params) => ({
                url: '/admin/product/',
                params: params
            }),
        })
    }),
})

export const { useFetchAdminProductsQuery, useFetchAdminProductByIdQuery } = adminProductsApi

export const createProduct = async (token, product) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/admin/product/create`, {
        ...product
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const updateProduct = async (token, product) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/admin/product/update`, {
        ...product
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}

export const deleteProduct = async (token, productId) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/product/delete`, {
        data: {
            productId
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    return data
}
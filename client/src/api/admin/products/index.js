import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const adminProductsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
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

export const createProduct = async (product) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/admin/product/create`, {
        ...product
    })

    return data
}

export const updateProduct = async (product) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/admin/product/update`, {
        ...product
    })

    return data
}

export const deleteProduct = async (productId) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/product/delete`, {
        data: {
            productId
        }
    })

    return data
}
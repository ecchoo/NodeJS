import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsAPI = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: (params) => ({
                url: '/products/',
                params: params
            }),
        }),
    }),
})

export const { useFetchProductsQuery } = productsAPI

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'

export const adminCategoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        fetchAdminCategories: builder.query({
            query: (params) => ({
                url: '/admin/categories/',
                params: params
            }),
        }),
        fetchAdminCategoryById: builder.query({
            query: (params) => ({
                url: '/admin/category/',
                params: params
            }),
        })
    }),
})

export const { useFetchAdminCategoriesQuery, useFetchAdminCategoryByIdQuery } = adminCategoriesApi

export const createCategory = async (category) => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/admin/category/create`, {
        ...category
    })

    return data
}

export const updateCategory = async (category) => {
    const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/admin/category/update`, {
        ...category
    })

    return data
}

export const deleteCategory = async (categoryId) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/admin/category/delete`, {
        data: {
            categoryId
        }
    })

    return data
}
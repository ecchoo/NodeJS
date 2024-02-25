import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminUsersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        fetchAdminUsers: builder.query({
            query: (params) => ({
                url: 'admin/users',
                params: params
            })
        })
    })
})

export const { useFetchAdminUsersQuery } = adminUsersApi


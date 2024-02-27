import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminUsersApi = createApi({
    reducerPath: 'adminUsersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Authorization', `Bearer ${getState().user.token}`);
            return headers;
        },
    }),
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


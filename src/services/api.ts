import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


type LoginResponse = {
    access: string;
    refresh: string;
    user: {
        id: number;
        email: string;
        username: string;
    };
}

type LoginRequest = {
    email: string;
    password: string;
}


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/api/user'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users'
        }),
        postUsers: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: 'users/',
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        loginUser: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: 'login/',
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
})

export const {
    useGetUsersQuery,
    usePostUsersMutation,
    useLoginUserMutation
} = api

export default api
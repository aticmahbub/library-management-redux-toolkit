import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`,
        }),
        createBook: builder.mutation({
            query: (book) => ({
                url: '/books',
                method: 'POST',
                body: book,
            }),
        }),
    }),
});

export const {useGetBooksQuery, useGetBookQuery, useCreateBookMutation} =
    baseApi;

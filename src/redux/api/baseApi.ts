import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
    }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['Books'],
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
        updateBook: builder.mutation({
            query: ({id, ...patch}) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: patch,
            }),
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'], // ✅ auto refresh after delete
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = baseApi;

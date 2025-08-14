import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => '/books',
        }),
    }),
});

export const {useGetBooksQuery} = baseApi;

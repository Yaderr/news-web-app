import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const {
    VITE_NEWS_API_BASE_URL,
    VITE_NEWS_API_KEY
} = import.meta.env


export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_NEWS_API_BASE_URL,
        headers: {
            'X-Api-Key': VITE_NEWS_API_KEY
        }
    }),
    endpoints: (builder) => ({
        getTopHeadlines: builder.query({
            query: (params) => ({
                url: '/top-headlines',
                params:{
                    ...params,
                    pageSize: 100
                }
            })
        }) 
    })
})


export const { useGetTopHeadlinesQuery } = newsApi
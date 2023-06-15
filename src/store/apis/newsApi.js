import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const {
    VITE_NEWS_API_BASE_URL,
    VITE_NEWS_API_KEY,
    VITE_PRX_API_URL
} = import.meta.env

const reqHeaders = VITE_PRX_API_URL === 'https://delightful-stockings-dog.cyclic.app'?  {
    'host-api-name': VITE_NEWS_API_BASE_URL,
    'api-key-env': 'NEWS_API_KEY'
}
: {
    'X-Api-Key': VITE_NEWS_API_KEY
}

export const getSavedFromLocalStorage = () => {
    const { 
        articles
    } = JSON.parse(localStorage.getItem('bookmarks') ?? '{}')

    return articles
}


export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({
        baseUrl: VITE_PRX_API_URL,
        headers: reqHeaders
    }),
    endpoints: (builder) => ({
        getTopHeadlines: builder.query({
            query: (params) => ({
                url: '/top-headlines',
                params:{
                    ...params,
                    pageSize: 30
                }
            }),
            transformResponse: async (response) => {

                const favorites =  getSavedFromLocalStorage()
                if(!favorites) return response

                response.articles = response.articles.map((article) => {
                    const is = favorites.some((favorite) => JSON.stringify(article) === JSON.stringify(favorite))
                    if(is) return { ...article, isSaved: true }
                    return {...article, isSaved: false}
                })

                return response
            }
        }),
        
        getEverything: builder.query({
            query: (params) => ({
                url: '/everything',
                params: {
                    ...params,
                    pageSize: 10,
                    sortBy: 'relevancy'
                }
            }),
            transformResponse: (response) => {
                return response.articles
            }

        })
    })
})


export const { useGetTopHeadlinesQuery, useLazyGetEverythingQuery } = newsApi
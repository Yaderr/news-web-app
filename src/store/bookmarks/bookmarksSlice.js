import { createSlice, current } from '@reduxjs/toolkit';
import { getSavedFromLocalStorage } from '../apis';

export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: () => {
        const articles = getSavedFromLocalStorage() ?? []

        return {
            articles,
            articlesSaved: articles.map(article => ({...article, isSaved: true}))
        }
    },
    reducers: {
        addNewArticle: (state, action) => {

            state.articles.push(action.payload)
            state.articlesSaved.push({...action.payload, isSaved: true})
        },
        deleteArticle: (state, action) => {
            
            state.articles = current(state.articles).filter(article => JSON.stringify(article) !== JSON.stringify(action.payload))
            state.articlesSaved = current(state.articlesSaved).filter(article => {
                const compareArticle = {...article}
                delete compareArticle.isSaved
                return JSON.stringify(compareArticle) !== JSON.stringify(action.payload)
            }
            )
        },
        deleteAll: (state) => {
            state.articles = []
            state.articlesSaved = []
        }
    }
});

export const { addNewArticle, deleteArticle, deleteAll } = bookmarksSlice.actions;
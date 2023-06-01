import { createSlice } from '@reduxjs/toolkit';
import { getSavedFromLocalStorage } from '../apis';

export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: () => {
        const articles = getSavedFromLocalStorage() ?? []

        return {
            articles
        }
    },
    reducers: {
        addNewArticle: (state, action) => {
            state.articles.push(action.payload)

        },
        deleteArticle: (state, action) => {
            state.articles = state.articles.filter(article => JSON.stringify(article) !== JSON.stringify(action.payload))
        }
    }
});

export const { addNewArticle, deleteArticle } = bookmarksSlice.actions;
import { createSlice, current } from '@reduxjs/toolkit';
import { getSavedFromLocalStorage } from '../apis';

export const bookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState: () => {
        const articles = getSavedFromLocalStorage() ?? []

        return {
            articles,
            articlesSaved: articles.map(article => ({...article.article, isSaved: true, docId: article.docId}))
        }
    },
    reducers: {
        addNewArticle: (state, action) => {

            state.articles.push({docId: action.payload.docId, article: {...action.payload.article}})
            state.articlesSaved.push({docId: action.payload.docId, ...action.payload.article, isSaved: true})
        },
        deleteArticle: (state, action) => {
            console.log( current(state.articlesSaved));
            state.articles = current(state.articles).filter(article => JSON.stringify(article.article) !== JSON.stringify(action.payload))
            state.articlesSaved = current(state.articlesSaved).filter(article => {
                const compareArticle = {...article}
                delete compareArticle.isSaved
                delete compareArticle.docId
                return JSON.stringify(compareArticle) !== JSON.stringify(action.payload)
            }
            )
        },
        addAllArticles: (state, action) => {
            action.payload.forEach((bookMark) => {
                bookmarksSlice.caseReducers.addNewArticle(state, {payload: bookMark})
            })
        },
        deleteAll: (state) => {
            state.articles = []
            state.articlesSaved = []
        }
    }
});

export const { addNewArticle, deleteArticle, addAllArticles, deleteAll } = bookmarksSlice.actions;
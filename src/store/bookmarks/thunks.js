import { addNewArticle, deleteArticle } from "./bookmarksSlice"

export const startSaveNewArticle = (article) => {

    return ( dispatch, getState ) => {

        const toSaveArticle = {...article}
        delete toSaveArticle.isSaved
        
        dispatch(addNewArticle(toSaveArticle))
        const { articles } = getState().bookmarks

        localStorage.setItem('bookmarks', JSON.stringify({articles}))
    }
}

export const startRemoveNewArticle = (article) => {

    return ( dispatch, getState ) => {

        dispatch(deleteArticle(article))

        const { articles } = getState().bookmarks

        localStorage.setItem('bookmarks', JSON.stringify({articles}))
    }
}
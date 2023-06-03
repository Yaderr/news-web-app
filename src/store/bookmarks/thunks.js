import { addNewArticle, deleteAll, deleteArticle } from "./bookmarksSlice"

export const startSaveNewArticle = (article) => {

    return ( dispatch, getState ) => {

        const toSaveArticle = { ...article }
        delete toSaveArticle.isSaved
        
        dispatch(addNewArticle(toSaveArticle))
        const { articles } = getState().bookmarks

        localStorage.setItem('bookmarks', JSON.stringify({articles}))
    }
}

export const startRemoveNewArticle = (article) => {

    return ( dispatch, getState ) => {

        const toDeleteArticle = { ...article }
        delete toDeleteArticle.isSaved

        dispatch(deleteArticle(toDeleteArticle))
        const { articles } = getState().bookmarks

        localStorage.setItem('bookmarks', JSON.stringify({articles}))
    }
}

export const startDeleteAllArticles = () => {
    
    return (dispatch) => {
        localStorage.removeItem('bookmarks')
        dispatch(deleteAll())
    }
}
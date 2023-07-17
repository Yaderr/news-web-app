import { removeBookmark, saveBookmark } from "../../firebase"
import { addNewArticle, deleteAll, deleteArticle } from "./bookmarksSlice"

export const startSaveNewArticle = (article) => {

    return async ( dispatch, getState ) => {
        console.log(article);
        let toSaveArticle = { article: {...article} }
        delete toSaveArticle.article?.isSaved
        
        const { status, uid } = getState().auth
        if(status === 'authenticated') {
            const docId = await saveBookmark(uid, toSaveArticle)
            toSaveArticle.docId = docId
        }
        
        
        dispatch(addNewArticle(toSaveArticle))
        const { articles } = getState().bookmarks
        
        localStorage.setItem('bookmarks', JSON.stringify({articles}))
    }
}

export const startRemoveNewArticle = (article) => {

    return async ( dispatch, getState ) => {

        const toDeleteArticle = { ...article }
        delete toDeleteArticle.isSaved

        const { status, uid } = getState().auth
        if(status === 'authenticated') {
            removeBookmark(uid, article.docId)
        }

        delete toDeleteArticle.docId

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
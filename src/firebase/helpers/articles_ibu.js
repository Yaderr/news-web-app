import { collection, doc, getDoc, getDocs, increment, query, setDoc, updateDoc, where, deleteDoc, orderBy  } from 'firebase/firestore/lite'
import { FirebaseDB } from '../config'
import { getDoc as getFullDoc } from 'firebase/firestore'

export const getCommetsAndUsersFullDoc = async (commentsDocs) => {
    try {
        let comments = []

        for (const doc of commentsDocs) {
            let comment = doc.data()
            const userDoc = await getFullDoc(comment.userRef)
            comment.docId = doc.id
            comment.user = userDoc.data()
            comments.push(comment)
        }

        return comments
    } catch(error) {
        console.log(error)
    }
}

export const getCommetsAndUsers = async (commentsDocs) => {
    try {
        let comments = []

        for (const doc of commentsDocs) {
            let comment = doc.data()
            const userDoc = await getDoc(comment.userRef)
            comment.docId = doc.id
            comment.user = userDoc.data()
            comments.push(comment)
        }

        return comments
    } catch(error) {
        console.log(error)
    }
}

export const setView = async (docId) => {
    
    const docRef = doc(FirebaseDB, `articles_ibu/${docId}`)
    await updateDoc(docRef, { views: increment(1) })
}

const newArticleIbu = async (article, origin_id) => {

    const docRef = doc(collection(FirebaseDB, 'articles_ibu'))
    
    const ibu = {
        likes: 0,
        views: 1,
        origin_perma_id: origin_id,
        publishedAt: article.publishedAt,
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage
    }

    await setDoc(docRef, ibu)
    ibu.docId = docRef.id
    return ibu
}

export const getArticleByOriginId = async (origin_id, article) => {

    try {

        let articleIbu

        const artIbuQuery = query(collection(FirebaseDB, 'articles_ibu'), where('origin_perma_id' , '==', origin_id))
        
        const artIbuDocs = await getDocs(artIbuQuery)
        
        if(artIbuDocs.docs.length > 0) {
            articleIbu = artIbuDocs.docs[0].data()
            articleIbu.docId = artIbuDocs.docs[0].id
        }

        
        if(!articleIbu) {
            const newIbu = await newArticleIbu(article, origin_id)
            articleIbu = newIbu
        }
                
        const IbuCommentsQuery = query(collection(FirebaseDB, `articles_ibu_comments`), where('article_ibu_docId', '==', articleIbu.docId), orderBy('publishedAt', 'desc'))
        const IbuCommentsDocs = await getDocs(IbuCommentsQuery)
        
        
        
        const userComments = await getCommetsAndUsers(IbuCommentsDocs.docs)

        articleIbu.comments = userComments
        articleIbu.replies = []
        
        return articleIbu

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            error
        }
    }
}

export const saveComment = async (userUid, content, article_ibu_docId) => {

    try {
        const userRef = doc(FirebaseDB, `users/${userUid}`)
        const docRef = doc(collection(FirebaseDB, 'articles_ibu_comments'))

        const comment = {
            article_ibu_docId,
            content,
            publishedAt: new Date().getTime(),
            userRef
        }

        await setDoc(docRef, comment)

    } catch(error) {
        console.log(error)
    }
}

export const removeComment = async (docId) => {
    try {
        const docRef = doc(FirebaseDB, `articles_ibu_comments/${docId}`)
        await deleteDoc(docRef)
    } catch(error) {
        console.log(error);
    }
}
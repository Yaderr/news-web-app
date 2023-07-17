import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../config";

export const saveBookmark = async (userUid, article) => {

    try {

        const docRef = doc(collection(FirebaseDB, `bookmarks/${userUid}/articles/`))
        await setDoc(docRef, article.article)
        console.log(docRef.id);
        return docRef.id

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            error
        }
    }
}

export const removeBookmark = async (userUid, docId) => {

    console.log(userUid, docId);

    try {

        const docRef = doc(FirebaseDB, `bookmarks/${userUid}/articles/${docId}`)
        await deleteDoc(docRef, docRef)

    } catch (error) {
        console.log(error)
        return {
            ok: false,
            error
        }
    }
}

export const getAllBookMarks = async (userUid) => {
    try {

        const docRef = collection(FirebaseDB, `bookmarks/${userUid}/articles/`)
        const docs = await getDocs(docRef)

        const bookMarks = []

        docs.forEach((doc) => {
            const docArticle = doc.data()
            const article = {
                source: {
                    id: docArticle.source.id,
                    name: docArticle.source.name,
                },
                author: docArticle.author,
                title: docArticle.title,
                description: docArticle.description,
                url: docArticle.url,
                urlToImage: docArticle.urlToImage,
                publishedAt: docArticle.publishedAt,
                content: docArticle.content
            }
            bookMarks.push({article, docId: doc.id})
        })

        return bookMarks
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            error
        }
    }
}
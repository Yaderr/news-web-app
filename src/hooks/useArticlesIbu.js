import { useEffect, useState } from "react"
import { getArticleByOriginId, getCommetsAndUsersFullDoc, setView } from "../firebase"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { FirebaseDBFull } from "../firebase/config"

export const useArticlesIbu = (origin_perma_id, article) => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    
    useEffect(() => {
        const getData = async () => {
            const res = await getArticleByOriginId(origin_perma_id, article)
            setView(res.docId)
            setData(res)
            
            setIsLoading(false)
            const a = query(collection(FirebaseDBFull, `articles_ibu_comments`), where('article_ibu_docId', '==', res.docId), orderBy('publishedAt', 'desc'))
            
            const unsubscribe = onSnapshot(a, async (snapshot, data) => {
                
                const updatedComments = await getCommetsAndUsersFullDoc(snapshot.docs)
                setData({...res, comments: updatedComments})

            })
        }


        getData(origin_perma_id)

        
    }, [origin_perma_id])

    
    return {
        data,
        isLoading
    }
}
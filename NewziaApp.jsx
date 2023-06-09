import { useEffect } from "react"
import { AppRouter } from "./src/router/AppRouter"
// import { FirebaseStorage } from "./src/firebase/config"
// import { getDownloadURL, listAll, ref } from "firebase/storage"

export const NewziaApp = () => {

    const get = async () => {
        // const fileRef = ref(FirebaseStorage, 'source/profile/')
        // listAll(fileRef).then((res) => {
        //     console.log(res);
        // })

        // getDownloadURL(fileRef).then(url => {
        //     console.log(url);
        // })
    }

    useEffect(() => {
        get()
    },[])

    return (
        <AppRouter />
    )
}
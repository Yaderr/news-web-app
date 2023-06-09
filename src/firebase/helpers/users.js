import { doc, getDoc, query, setDoc, collection, where, getDocs } from 'firebase/firestore/lite'
import { FirebaseDB } from '../config'

export const getUserDataLogin = async ({ uid, displayName, email, photoURL, userName }) => {

    try {
        const docRef = doc(FirebaseDB, `users/${uid}`)
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()) {
            return {
                created: true,
                data: docSnap.data()
            }
        }

        const newUser = {
            userName: userName ?? null,
            displayName,
            uid,
            photoURL: photoURL ?? null,
            coverPhoto: "",
            biography: "",
            siteLink: "",
            followers: 0,
            followed: 0,
            createdAt: new Date().getTime(),
            email
        }

        await setDoc(docRef, newUser)

        return {
            created: false,
            data: newUser
        }

    } catch(error) {
        console.log(error);
    }
}

export const updateProfile = async (user) => {

    try {
        const docRef = doc(FirebaseDB, `users/${user.uid}`)
        await setDoc(docRef, {userName: user.userName}, { merge: true })
        return {
            ok: true,
            data: user
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            error
        }
    }
}

export const getUserByUserName = async (userName) => {
    try {
        const docRef = query(collection(FirebaseDB, 'users'), where('userName', '==', userName))
        const userDoc = await getDocs(docRef)
        const user = userDoc.docs[0].data()
        return {
            ok: true,
            data: user
        }
    } catch(error) {
        console.log(error)
        return {
            ok: false,
            error
        }
    }
}
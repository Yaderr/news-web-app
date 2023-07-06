import { doc, getDoc, setDoc } from 'firebase/firestore/lite'
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
            userName,
            displayName,
            photoURL: null,
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
        await setDoc(docRef, user, { merge: true })
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
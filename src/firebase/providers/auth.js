import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth, googleProvider } from '../config'
import { getUserDataLogin } from '../helpers'

export const signInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const { uid, displayName, email, photoURL } = result.user

        const userData = await getUserDataLogin({ uid, displayName, email, photoURL })

            return {
                ok: true,
                ...userData.data,
                uid
            }
        
    } catch (error) {

        return {
            ok: false,
            error
        }
    }
}

export const signUpWithEmailPassword = async (userEmail, password, userName, displayName) => {

    try {

        const result = await createUserWithEmailAndPassword(FirebaseAuth, userEmail, password)
        const { uid, email } = result.user

        const userData = await getUserDataLogin({ uid, displayName, email, userName })

        return {
            ok: true,
            ...userData.data,
            uid
        }

    } catch(error) {

        return {
            ok: false,
            error
        }
    }
}

export const loginWithEmailPassword = async (email, password) => {

    try {

        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid } = result.user

        const userData = await getUserDataLogin({ uid })

        return {
            ok: true,
            ...userData.data,
            uid
        }

    } catch(error) {

        let nMessage

        switch (error.code) {
            case 'auth/user-not-found':
                nMessage = 'El usuario no existe'
                break
            case 'auth/wrong-password':
                nMessage = 'Email o contraseña incorrecta'
                break
            default:
                nMessage = error.message
                break
        }
       
        return {
            ok: false,
            error: {...error, message: nMessage}
        }
    }
}
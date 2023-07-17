import { LoginPage } from "../../auth/pages"
import { getAllBookMarks, loginWithEmailPassword, signInWithGoogle, signUpWithEmailPassword, updateProfile } from "../../firebase"
import { addAllArticles } from "../bookmarks"
import { logOut, login, setLoginin } from "./authSlice"

const InitializeBookmarks = async (uid, dispatch, getState) => {
    const bookmarks = await getAllBookMarks(uid)
    dispatch(addAllArticles(bookmarks))
    const { articles } = getState().bookmarks
    localStorage.setItem('bookmarks', JSON.stringify({articles}))
}

export const startSignInWithGoogle = () => {

    return async (dispatch, getState) => {
        
        dispatch(setLoginin())
        const signInResponse = await signInWithGoogle()
        if(!signInResponse.ok) return dispatch(logOut(signInResponse.error.message))
        
        await InitializeBookmarks(signInResponse.uid, dispatch, getState)
        
        dispatch(login(signInResponse))
    }
}

export const startUpdateProfile = (userName) => {

    return async (dispatch, getState) => {
        const user = getState().auth
        
        const updatedProfile = await updateProfile({...user, userName})
        if(updatedProfile.ok) {
            dispatch(login(updatedProfile.data))
        }
    }
}

export const startSignupEmailPassword = (email, password, userName, displayName) => {

    return async (dispatch) => {
        dispatch(setLoginin())
        const signUpResult = await signUpWithEmailPassword(email, password, userName, displayName)
        
        if(!signUpResult.ok) return dispatch(logOut(signUpResult.error.message))

        dispatch(login(signUpResult))
    }
}

export const startLogin = (email, password) => {

    return async (dispatch, getState) => {
        dispatch(setLoginin())
        const loginResult = await loginWithEmailPassword(email, password)
        
        if(!loginResult.ok) return dispatch(logOut(loginResult.error.message))
        await InitializeBookmarks(loginResult.uid, dispatch, getState)
        dispatch(login(loginResult))
    }
}
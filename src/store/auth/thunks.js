import { LoginPage } from "../../auth/pages"
import { loginWithEmailPassword, signInWithGoogle, signUpWithEmailPassword, updateProfile } from "../../firebase"
import { logOut, login, setLoginin } from "./authSlice"

export const startSignInWithGoogle = () => {

    return async (dispatch) => {
        
        dispatch(setLoginin())
        const signInResponse = await signInWithGoogle()
        if(!signInResponse.ok) return dispatch(logOut(signInResponse.error.message))
        console.log(signInResponse);

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

    return async (dispatch) => {
        dispatch(setLoginin())
        const loginResult = await loginWithEmailPassword(email, password)
        
        if(!loginResult.ok) return dispatch(logOut(loginResult.error.message))

        dispatch(login(loginResult))
    }
}
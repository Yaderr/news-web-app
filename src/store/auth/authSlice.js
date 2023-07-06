
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: () => {

        const {
            uid,
            status,
            displayName,
            userName,
            photoURL,
            coverPhoto, 
            email,
            biography,
            siteLink
           
        } = JSON.parse(localStorage.getItem('auth') ?? '{}')

        if(!uid) {
            return {
                status: 'checking', //'not-authenticated', 'authenticated', 'checking', loginin
                uid: null,
                displayName: null,
                userName: null,
                photoURL: null,
                coverPhoto: null,
                email: null,
                biography: null,
                siteLink: null,
                errorMessage: null
            }

        }

        return {
            status: status ?? 'checking', //'not-authenticated', 'authenticated', 'checking', loginin
            uid: uid ?? null,
            displayName: displayName ?? null,
            userName: userName ?? null,
            photoURL: photoURL ?? null,
            coverPhoto: coverPhoto ?? null,
            email: email ?? null,
            biography: biography ?? null,
            siteLink: siteLink ?? null,
            errorMessage: null
        }

    },
    reducers: {
        chekingCredentials: (state) => {
            state.status = 'checking'
        },
        loginAsGuest: (state) => {
            state.status = 'not-authenticated'
        },
        login: (state, action) => {
            const { uid, displayName, email, userName, coverPhoto, photoURL,  biography, siteLink } = action.payload

            state.status = 'authenticated'
            state.errorMessage = null
            state.uid = uid
            state.displayName = displayName
            state.email = email
            state.userName = userName
            state.coverPhoto = coverPhoto
            state.photoURL = photoURL
            state.biography = biography
            state.siteLink = siteLink
            

            localStorage.setItem('auth', JSON.stringify(state))
        },
        logOut: (state, action) => {
            state.status = 'not-authenticated'
            state.errorMessage = action.payload
            state.uid = null
            state.displayName = null
            state.email = null
            state.userName = null
            state.coverPhoto = null
            state.photoURL = null

            localStorage.removeItem('auth')
        },
        setLoginin: (state) => {
            state.status = 'loginin'
        },
        resetError: (state) => {
            state.errorMessage = null
        }
    }
});

export const { chekingCredentials, loginAsGuest, logOut, setLoginin, login, resetError } = authSlice.actions;
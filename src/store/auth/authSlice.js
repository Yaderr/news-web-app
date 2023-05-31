
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'not-authenticated', 'authenticated', 'checking'
        uid: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        chekingCredentials: (state) => {
            state.status = 'checking'
        },
        loginAsGuest: (state) => {
            state.status = 'not-authenticated'
        }
    }
});

export const { chekingCredentials, loginAsGuest } = authSlice.actions;
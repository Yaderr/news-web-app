import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
import { getFirestore as gft } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDw3li4Si_BqBh--17lWImjiELTSS_Jvc4",
  authDomain: "newzia-app.firebaseapp.com",
  projectId: "newzia-app",
  storageBucket: "newzia-app.appspot.com",
  messagingSenderId: "379669839049",
  appId: "1:379669839049:web:d8c27cabc88a5a56182118",
  measurementId: "G-H4G5GX2NS4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
export const FirebaseDBFull = gft(FirebaseApp)
export const googleProvider = new GoogleAuthProvider()
export const FirebaseStorage = getStorage()
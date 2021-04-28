import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAes5hycFPiggVtpwkwIOsNpuzioJS82F0",
    authDomain: "week11-2203f.firebaseapp.com",
    projectId: "week11-2203f",
    storageBucket: "week11-2203f.appspot.com",
    messagingSenderId: "579448499888",
    appId: "1:579448499888:web:f469e2af55a8ce86c9d575",
    measurementId: "G-Q8Q3L2WC3B"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb
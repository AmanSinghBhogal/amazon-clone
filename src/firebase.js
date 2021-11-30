import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_bIJg4ZfJDGOiJ2oWeZoN7AXyopp61Sc",
    authDomain: "clone-5ddf4.firebaseapp.com",
    projectId: "clone-5ddf4",
    storageBucket: "clone-5ddf4.appspot.com",
    messagingSenderId: "329796718198",
    appId: "1:329796718198:web:7beeb7069e69f7a6375957",
    measurementId: "G-R20LZP1KR0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
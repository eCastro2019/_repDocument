import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB5r2sXE56mF_v3fdNyr8Hr50aRVLfI8Wk",
    authDomain: "nnsc-b9abf.firebaseapp.com",
    projectId: "nnsc-b9abf",
    storageBucket: "nnsc-b9abf.appspot.com",
    messagingSenderId: "766627960505",
    appId: "1:766627960505:web:f26c03a3a8126dca0d2d68",
    measurementId: "G-DHC125GHYS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const storage = firebase.storage();
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

export {
    db, 
    storage, 
    googleAuthProvider, 
    firebase
}
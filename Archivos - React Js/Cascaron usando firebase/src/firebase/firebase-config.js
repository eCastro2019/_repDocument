import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBAd4JfTAkNPH67gLXlSaf2rheb3blVfWo",
    authDomain: "appsvconection.firebaseapp.com",
    projectId: "appsvconection",
    storageBucket: "appsvconection.appspot.com",
    messagingSenderId: "428571387537",
    appId: "1:428571387537:web:59670429d89a07e3fac130",
    measurementId: "G-VXLSV2RTEH"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
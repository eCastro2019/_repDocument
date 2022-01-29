import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYqG-yz0kpD_9yH3BHJBLUvSw_DQi43SM",
  authDomain: "whatscommerce-10f93.firebaseapp.com",
  databaseURL: "https://whatscommerce-10f93.firebaseio.com",
  projectId: "whatscommerce-10f93",
  storageBucket: "whatscommerce-10f93.appspot.com",
  messagingSenderId: "674906515413",
  appId: "1:674906515413:web:724a529acdaf6ee1df7f5c",
};
// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);

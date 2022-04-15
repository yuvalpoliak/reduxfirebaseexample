import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import store from "../redux/store";
import firebase from 'firebase/app'
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD60k5XxN6ihwLulE2bUVxgG6FjEayplVY",
  authDomain: "reduxfirebaseexample-23b32.firebaseapp.com",
  projectId: "reduxfirebaseexample-23b32",
  storageBucket: "reduxfirebaseexample-23b32.appspot.com",
  messagingSenderId: "489021673465",
  appId: "1:489021673465:web:8ba4e3c9729f77958bf728",
  measurementId: "G-6TRMMJZ8YJ"
};

export const initialiseFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(initialiseFirebase);
firebase.firestore()

export const reactReduxFirebaseConfig = {
  userProfile: 'users'
}

export const reactReduxFirebaseProps = {
  firebase,
  createFirestoreInstance,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTEpUXOMYGh_7cBIYvqfynu0RVCSA3g6E",
  authDomain: "openinapp-5a16f.firebaseapp.com",
  projectId: "openinapp-5a16f",
  storageBucket: "openinapp-5a16f.appspot.com",
  messagingSenderId: "40109569405",
  appId: "1:40109569405:web:1bd9dd3f3b2a69970d4814",
  measurementId: "G-SL67J24MGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
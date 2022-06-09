// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjK9FdjmtV2ikm_maUpNIvFZfbzx98Les",
  authDomain: "tofayel101-6339c.firebaseapp.com",
  projectId: "tofayel101-6339c",
  storageBucket: "tofayel101-6339c.appspot.com",
  messagingSenderId: "1076684817591",
  appId: "1:1076684817591:web:b1ddedbf30e7587736b932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

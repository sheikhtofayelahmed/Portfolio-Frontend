// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB50099E5TEUN6_AY0ShD4ezrvh8JAbAU",
  authDomain: "portfolio-8f005.firebaseapp.com",
  projectId: "portfolio-8f005",
  storageBucket: "portfolio-8f005.appspot.com",
  messagingSenderId: "1042633102984",
  appId: "1:1042633102984:web:198f64c94ad5752627f13d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

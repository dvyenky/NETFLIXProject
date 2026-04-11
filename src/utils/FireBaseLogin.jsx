// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHc5z6US8HlS3MkYTvJIXN1zybPUC1yc4",
  authDomain: "netflixgpt-6c282.firebaseapp.com",
  projectId: "netflixgpt-6c282",
  storageBucket: "netflixgpt-6c282.firebasestorage.app",
  messagingSenderId: "1077994180803",
  appId: "1:1077994180803:web:be314857a4b141c3539276",
  measurementId: "G-FFG4F23GRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

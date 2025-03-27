// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0tjKvhEdQAE1eUct3xsow94G1HBYlrS8",
  authDomain: "interviewassistant-51cf3.firebaseapp.com",
  projectId: "interviewassistant-51cf3",
  storageBucket: "interviewassistant-51cf3.firebasestorage.app",
  messagingSenderId: "853338869325",
  appId: "1:853338869325:web:c2b75ea113c526c2505604",
  measurementId: "G-MRY6ZZXEFJ",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

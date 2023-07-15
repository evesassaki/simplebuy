// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "quatromaos-36335.firebaseapp.com",
  projectId: "quatromaos-36335",
  storageBucket: "quatromaos-36335.appspot.com",
  messagingSenderId: "502118691773",
  appId: "1:502118691773:web:4f56a40474dc9c182e18d4",
  measurementId: "G-XFFSZXZRDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

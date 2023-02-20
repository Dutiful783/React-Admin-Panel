import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admin-69d25.firebaseapp.com",
  projectId: "react-admin-69d25",
  storageBucket: "react-admin-69d25.appspot.com",
  messagingSenderId: "310211914216",
  appId: "1:310211914216:web:fb7f2ac29f690282441c5d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
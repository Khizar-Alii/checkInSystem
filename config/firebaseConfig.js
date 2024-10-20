// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD4_iKgfn5k1RNGA3k6XdNuF5113v3xEqs",
  authDomain: "react-assignment-4b8be.firebaseapp.com",
  projectId: "react-assignment-4b8be",
  storageBucket: "react-assignment-4b8be.appspot.com",
  messagingSenderId: "340060278344",
  appId: "1:340060278344:web:a1256b7084956d0879d27d",
  measurementId: "G-DM3C125J7M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

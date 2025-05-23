// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8cVsxqkJoLzahL1RrAZz4BIfC9yf24-o",
  authDomain: "coffee-store-b2f28.firebaseapp.com",
  projectId: "coffee-store-b2f28",
  storageBucket: "coffee-store-b2f28.firebasestorage.app",
  messagingSenderId: "724109416304",
  appId: "1:724109416304:web:f46b592656da7fdb1c21b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbaacKxpac1dxtxSippX36Y1YEqzO-7iA",
  authDomain: "madness-7e578.firebaseapp.com",
  projectId: "madness-7e578",
  storageBucket: "madness-7e578.appspot.com",
  messagingSenderId: "872046565425",
  appId: "1:872046565425:web:cb4a13e69202c142395d10",
  measurementId: "G-7YRLXVLT2N"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
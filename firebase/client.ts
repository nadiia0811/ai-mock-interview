import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCndU_lidqdtLb0uJoLFTx2giFh1vACIEk",
  authDomain: "prepwise-7696f.firebaseapp.com",
  projectId: "prepwise-7696f",
  storageBucket: "prepwise-7696f.firebasestorage.app",
  messagingSenderId: "605633977256",
  appId: "1:605633977256:web:e39e1a3178a1b740b3db9d",
  measurementId: "G-3XB5277EGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

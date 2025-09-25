
// src/firebase.js
import {initializeApp} from "firebase/app"; 
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAga_fGd1gvMPNJMZjR_ZcmEFR_ZWl-W6w",
  authDomain: "nandish-portfolio-50f26.firebaseapp.com",
  projectId: "nandish-portfolio-50f26",
  storageBucket: "nandish-portfolio-50f26.firebasestorage.app",
  messagingSenderId: "25518079363",
  appId: "1:25518079363:web:fa40702848514b837c8ab6",
  measurementId: "G-X9T7NMTZFF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

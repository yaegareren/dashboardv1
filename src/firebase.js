import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboardv1-4a950.firebaseapp.com",
  projectId: "dashboardv1-4a950",
  storageBucket: "dashboardv1-4a950.appspot.com",
  messagingSenderId: "571562905439",
  appId: "1:571562905439:web:24e9defe2f8b48874330ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

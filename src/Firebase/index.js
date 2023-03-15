import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  authDomain: "sailormoonreactproject.firebaseapp.com",
  projectId: "sailormoonreactproject",
  storageBucket: "sailormoonreactproject.appspot.com",
  messagingSenderId: "187541217326",
  appId: "1:187541217326:web:e35d8789d60b49ad41ffbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

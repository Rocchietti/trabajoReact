import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD6GwBr_4L26wnslqwvSzWUhTmxFwS4tJg",
  authDomain: "gamergy-store.firebaseapp.com",
  projectId: "gamergy-store",
  storageBucket: "gamergy-store.appspot.com",
  messagingSenderId: "1040409755710",
  appId: "1:1040409755710:web:006644d52e811a6aeed16f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
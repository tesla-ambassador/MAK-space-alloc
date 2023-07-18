import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgj0Xo6vTv033WlmAFDSMZcK2ExIICJu0",
  authDomain: "muk-space-allocation.firebaseapp.com",
  projectId: "muk-space-allocation",
  storageBucket: "muk-space-allocation.appspot.com",
  messagingSenderId: "913659497155",
  appId: "1:913659497155:web:58e84e00e3b229c3ae3076",
  measurementId: "G-QNZG2BF7HR",
};

const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutOfapp = () => signOut(auth);

// Database Instantiations and operations
export const db = getFirestore(app);
export const colRef = collection(db, "user_bookings");

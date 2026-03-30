import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Note: Analytics is commented out because AdBlockers (like uBlock/Brave) will block it and cause ERR_BLOCKED_BY_CLIENT
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLuPZD_oYqDvFce0LsKg_qUVFvsENOHgI",
  authDomain: "portfolio-4bd5b.firebaseapp.com",
  projectId: "portfolio-4bd5b",
  storageBucket: "portfolio-4bd5b.firebasestorage.app",
  messagingSenderId: "611347008930",
  appId: "1:611347008930:web:2cf1fb505d03620b0676fb",
  measurementId: "G-GRPD8LMKSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore DB and Export it so Contact.jsx can use it!
export const db = getFirestore(app);
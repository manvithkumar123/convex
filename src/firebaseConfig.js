// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-hBq9uzGGaLc7Mf_EyZKuE5Qc4UtkRis",
  authDomain: "convox-c1603.firebaseapp.com",
  projectId: "convox-c1603",
  storageBucket: "convox-c1603.firebasestorage.app",
  messagingSenderId: "138312088350",
  appId: "1:138312088350:web:b065372e343e12c864670f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Add this
const auth = getAuth(app);
export { auth };

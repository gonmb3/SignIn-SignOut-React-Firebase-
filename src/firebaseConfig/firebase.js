
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBSA9xiIqOiNJ7LaKSwB5gatksMC2Siyes",
  authDomain: "login-firebase-e88ab.firebaseapp.com",
  projectId: "login-firebase-e88ab",
  storageBucket: "login-firebase-e88ab.appspot.com",
  messagingSenderId: "392940164741",
  appId: "1:392940164741:web:faa2048ad705bc94b77bec"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwqtm1tZ8V9L374xXUu6bTXjy4yqb2TzA",
  authDomain: "instagram-clone-78884.firebaseapp.com",
  projectId: "instagram-clone-78884",
  storageBucket: "instagram-clone-78884.appspot.com",
  messagingSenderId: "554833025182",
  appId: "1:554833025182:web:707c75b173fb2550dd038f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { db, auth, provider, storage };

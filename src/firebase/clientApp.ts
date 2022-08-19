import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEB510azYUORC-A-C-6uLhYR8_iaf69hI",
  authDomain: "reddit-clone-375d8.firebaseapp.com",
  projectId: "reddit-clone-375d8",
  storageBucket: "reddit-clone-375d8.appspot.com",
  messagingSenderId: "914147915751",
  appId: "1:914147915751:web:a96ab439b670d1ca96ef42"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

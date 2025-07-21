import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbDr4NIogT_QJ6g6HIbrQceQ6wXKOBM5I",
  authDomain: "languagelearner-d1edd.firebaseapp.com",
  projectId: "languagelearner-d1edd",
  storageBucket: "languagelearner-d1edd.firebasestorage.app",
  messagingSenderId: "918731553584",
  appId: "1:918731553584:web:dd9d7e555f515d784826f5",
  measurementId: "G-02GK66N03T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
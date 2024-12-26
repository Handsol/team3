import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJfmih7ivTn8ezzInItEYaMQNdI45sS7Y",
  authDomain: "introducemember.firebaseapp.com",
  projectId: "introducemember",
  storageBucket: "introducemember.firebasestorage.app",
  messagingSenderId: "466637835124",
  appId: "1:466637835124:web:c9c73aafc2dbd2932bfa21",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

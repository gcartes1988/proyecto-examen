// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAXp7Tbr281rp78A4YdlzWDNVj8kgmS6Tg",
  authDomain: "proyecto-examen-876a8.firebaseapp.com",
  projectId: "proyecto-examen-876a8",
  storageBucket: "proyecto-examen-876a8.firebasestorage.app",
  messagingSenderId: "716660872257",
  appId: "1:716660872257:web:3036d95b7bc7c0c5c2e2c0"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export default firebase;

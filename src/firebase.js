import firebase from 'firebase/app';
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrMAXkqVsy_uej_c9A5SLTAPXqOX48YS8",
  authDomain: "react-blog-72db5.firebaseapp.com",
  projectId: "react-blog-72db5",
  storageBucket: "react-blog-72db5.appspot.com",
  messagingSenderId: "674292040383",
  appId: "1:674292040383:web:734b18cccf286d8de23c0a"
};

// Initialize FirebaseX
firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();
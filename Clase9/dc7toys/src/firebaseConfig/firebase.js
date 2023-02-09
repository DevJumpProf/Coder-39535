// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// aca va tu codigo de FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBQaRFcpsSj3D4Ei9rcZiIp9pYn1gIiuT4",
    authDomain: "crudcoder39535.firebaseapp.com",
    projectId: "crudcoder39535",
    storageBucket: "crudcoder39535.appspot.com",
    messagingSenderId: "151504072588",
    appId: "1:151504072588:web:f2be4d7436fadf17d230a9"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEEONXjtaAsiONR2mM2lWNTTDBUM5FTYU",
  authDomain: "student-varification-90f45.firebaseapp.com",
  projectId: "student-varification-90f45",
  storageBucket: "gs://student-varification-90f45.firebasestorage.app",
  messagingSenderId: "441781275609",
  appId: "1:441781275609:web:40f6ab9044ef3a4beee7c8",
  measurementId: "G-VS3B15DCJN",
  databaseURL:"https://student-varification-90f45-default-rtdb.firebaseio.com/",

};  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
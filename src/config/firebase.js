// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg6gRVsmJK37Y7-AQt1bSyUrHMRJ0LfWY",
  authDomain: "betravel-surabaya.firebaseapp.com",
  projectId: "betravel-surabaya",
  storageBucket: "betravel-surabaya.appspot.com",
  messagingSenderId: "530384283606",
  appId: "1:530384283606:web:5a3835d78bb5a6eeaf6677",
  measurementId: "G-2KSZ5QYQKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
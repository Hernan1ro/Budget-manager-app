// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPIN2vQbTQBPOyart2InwMwnSDMNnZo7Q",
  authDomain: "fir-auth-52866.firebaseapp.com",
  projectId: "fir-auth-52866",
  storageBucket: "fir-auth-52866.appspot.com",
  messagingSenderId: "196408347579",
  appId: "1:196408347579:web:e1853c5c384433c370129e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google = new GoogleAuthProvider();

export { app, google };

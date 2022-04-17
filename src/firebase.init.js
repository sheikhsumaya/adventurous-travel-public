// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArSgsxBCiH5UibWizTRiIHD9jskd3IOXI",
  authDomain: "adventurous-travelling.firebaseapp.com",
  projectId: "adventurous-travelling",
  storageBucket: "adventurous-travelling.appspot.com",
  messagingSenderId: "495032237068",
  appId: "1:495032237068:web:9f40d320b8eed976d44229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;
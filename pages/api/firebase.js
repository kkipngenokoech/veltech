// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeUvq8TvdOe5P0prnEl01HV7qDM0hovX4",
  authDomain: "everydayvisa.firebaseapp.com",
  projectId: "everydayvisa",
  storageBucket: "everydayvisa.appspot.com",
  messagingSenderId: "207582029255",
  appId: "1:207582029255:web:c037e77f7719644c14e5e2",
  measurementId: "G-CT72Z9G9SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
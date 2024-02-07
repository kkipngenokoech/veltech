// pages/_app.js

import "../src/app/globals.css";
// https://firebase.google.com/docs/web/setup#available-libraries - more services can be added here
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBeUvq8TvdOe5P0prnEl01HV7qDM0hovX4",
  authDomain: "everydayvisa.firebaseapp.com",
  projectId: "everydayvisa",
  storageBucket: "everydayvisa.appspot.com",
  messagingSenderId: "207582029255",
  appId: "1:207582029255:web:c037e77f7719644c14e5e2",
  measurementId: "G-CT72Z9G9SM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

//aqui configiraremos las creadenciales de firebase es decir usuarios y contrasenas
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//esta linea es para la conexion
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMQ6baDIbputlnSNjCM3_VI0wHNRYcBWk",
  authDomain: "p-ingenieria.firebaseapp.com",
  projectId: "p-ingenieria",
  storageBucket: "p-ingenieria.appspot.com",
  messagingSenderId: "579996355709",
  appId: "1:579996355709:web:e1c596eb4860bea5943514",
  measurementId: "G-MLWTWTJ39R"
};

//? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
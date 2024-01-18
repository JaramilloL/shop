// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:579996355709:web:e2848aef3fbac131943514",
  measurementId: "G-V68529X74H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

//?Exportamos el auth para la verificacion de authenticacion
export { analytics, auth };
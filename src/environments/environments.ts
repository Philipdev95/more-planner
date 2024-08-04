/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCof3gosHf6LAgGyTmeCXBuUr-fhJloXyU",
  authDomain: "chunky-web-studio.firebaseapp.com",
  projectId: "chunky-web-studio",
  storageBucket: "chunky-web-studio.appspot.com",
  messagingSenderId: "1012249236743",
  appId: "1:1012249236743:web:855ad44583932c2849a1a2",
  measurementId: "G-T38KWJ4WT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCof3gosHf6LAgGyTmeCXBuUr-fhJloXyU",
    authDomain: "chunky-web-studio.firebaseapp.com",
    projectId: "chunky-web-studio",
    storageBucket: "chunky-web-studio.appspot.com",
    messagingSenderId: "1012249236743",
    appId: "1:1012249236743:web:855ad44583932c2849a1a2",
    measurementId: "G-T38KWJ4WT4"
  }
}

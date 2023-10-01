// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkX9qPFfekabck9QEhirwBb0NiUkfRL6Y",
  authDomain: "task-tracker-bd1d0.firebaseapp.com",
  projectId: "task-tracker-bd1d0",
  storageBucket: "task-tracker-bd1d0.appspot.com",
  messagingSenderId: "1000247873992",
  appId: "1:1000247873992:web:1b88086fb93ed3342e70fd",
  // measurementId: "G-D0BC8TDLNX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

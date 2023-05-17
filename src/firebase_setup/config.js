// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGKpW4wxZPMxBHTM1iBqdFv2zwBctdWp4",
  authDomain: "weight-tracker-b7cf5.firebaseapp.com",
  projectId: "weight-tracker-b7cf5",
  storageBucket: "weight-tracker-b7cf5.appspot.com",
  messagingSenderId: "631551302375",
  appId: "1:631551302375:web:c197341b2e275043c2e042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);
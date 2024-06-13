// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FP7mMX3X0seMztTFa7zvdUvQ_vKk2pk",
  authDomain: "job-portal-865e2.firebaseapp.com",
  projectId: "job-portal-865e2",
  storageBucket: "job-portal-865e2.appspot.com",
  messagingSenderId: "419159939321",
  appId: "1:419159939321:web:d7763f2686234734a76a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {app,auth};
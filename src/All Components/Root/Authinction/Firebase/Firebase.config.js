// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjNMBepcVljI6YEo-mHNgBsqAunJnOUVk",
  authDomain: "drive-pluse.firebaseapp.com",
  projectId: "drive-pluse",
  storageBucket: "drive-pluse.appspot.com",
  messagingSenderId: "1002352886448",
  appId: "1:1002352886448:web:cc42ddcd7dfed0d3dc3175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8XKw-yPQ_Oy5TcBOxZYeJ-Wsww2AfRKE",
  authDomain: "synth-ai-envoys.firebaseapp.com",
  projectId: "synth-ai-envoys",
  storageBucket: "synth-ai-envoys.appspot.com",
  messagingSenderId: "786768331453",
  appId: "1:786768331453:web:4a3057cef10480f19cedd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app , auth};

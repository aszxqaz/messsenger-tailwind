// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-E2YGZj4NOT03kMT47shBwR-tDeahARg",
  authDomain: "messsenger-aabb6.firebaseapp.com",
  projectId: "messsenger-aabb6",
  storageBucket: "messsenger-aabb6.appspot.com",
  messagingSenderId: "46913446876",
  appId: "1:46913446876:web:3a291b191132b744d86519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getStorage } from "firebase/storage";

// Get the default bucket from a custom firebase.app.App
export const storage = getStorage(app);


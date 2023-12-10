// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf9mP5BfiJ9U1ec0cYGGq2SDEiGoGk3cA",
  authDomain: "the-news-dragon-1c323.firebaseapp.com",
  projectId: "the-news-dragon-1c323",
  storageBucket: "the-news-dragon-1c323.appspot.com",
  messagingSenderId: "842531674217",
  appId: "1:842531674217:web:6efd900838e496556d6af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
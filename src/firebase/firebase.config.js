// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA56-_gShvsBCVWl3_DNPqBLVeChU146jo",
  authDomain: "b9-a9-fe222.firebaseapp.com",
  projectId: "b9-a9-fe222",
  storageBucket: "b9-a9-fe222.appspot.com",
  messagingSenderId: "704832835550",
  appId: "1:704832835550:web:385e5c0f4018ea8aa9574f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
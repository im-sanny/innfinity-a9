import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcF1rJ8QGbAX8-53xhDrtObgOkOCIC0Nw",
  authDomain: "assignment-9-d5df9.firebaseapp.com",
  projectId: "assignment-9-d5df9",
  storageBucket: "assignment-9-d5df9.appspot.com",
  messagingSenderId: "289738904367",
  appId: "1:289738904367:web:598b44faf8c6e04ef947da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

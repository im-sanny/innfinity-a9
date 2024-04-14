import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

//create user
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const allValues = { createUser };

const FirebaseProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;

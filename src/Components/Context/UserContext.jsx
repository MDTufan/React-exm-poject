import { createContext} from "react"

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import app from "../../Firebase/Firebase.init";






export const AuthContext = createContext();
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();


const UserContext = ({children}) => {


const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const googleUser=()=>{
    signInWithPopup(auth,providerGoogle)
}

const loginUser=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

const Authinfo ={
   
   createUser,
   googleUser,
   loginUser
};

  return (
    <div>
      <AuthContext.Provider value={Authinfo}>
            {children}
      </AuthContext.Provider>
    </div>
  )
}

export default UserContext

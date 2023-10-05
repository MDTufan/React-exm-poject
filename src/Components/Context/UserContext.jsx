import { createContext, useEffect, useState} from "react"

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from "../../Firebase/Firebase.init";






export const AuthContext = createContext();
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();


const UserContext = ({children}) => {
const [user,setUser]=useState(null);

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const googleUser=()=>{
    signInWithPopup(auth,providerGoogle)
}

const loginUser=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}

const Logout=()=>{
  return signOut(auth)
  .then(() => {
    
  }).catch((error) => {
   
  });
}


useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser);
  })
  return ()=>{
    unsubscribe();
  }
})

const Authinfo ={
   
   createUser,
   googleUser,
   loginUser,
   Logout,
   user
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

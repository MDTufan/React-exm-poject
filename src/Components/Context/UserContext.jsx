import { createContext, useEffect, useState} from "react"

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from "../../Firebase/Firebase.init";






export const AuthContext = createContext();
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();


const UserContext = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setloading]=useState(true);

const createUser =(email,password)=>{
  setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}

const verifyEmail=()=>{
  return  sendEmailVerification(auth.currentUser)
  
  }

const googleUser=()=>{
  setloading(true)
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
  setloading(false)
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
   verifyEmail,
   loading,
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

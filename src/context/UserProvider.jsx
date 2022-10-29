import { createContext, useEffect, useState, useContext } from "react"

import {createUserWithEmailAndPassword
        ,signInWithEmailAndPassword, 
        signOut, onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";




const UserContext = createContext();


const UserProvider = ({children}) => {   

    const  [user, setUser] = useState({});

   
    const createUser = (email, password) => {      /*------CREAER USUARIO/CUENTA CON FIREBASE -------*/
      return createUserWithEmailAndPassword(auth,email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout = () => {
        return signOut(auth)
    }


    /*------     observador de estado de autenticación -------*/
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {    
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }       
    },[])

    return(
        <UserContext.Provider
        value={{
            createUser,
            user ,
            logout ,
            signIn
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}

export default UserContext


export const useUser = () => {
    return useContext(UserContext)
}

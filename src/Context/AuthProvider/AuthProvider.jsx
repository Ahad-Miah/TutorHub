import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Utils/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {

    const[loading,setLoading]=useState(true);
    const [user, setUser] = useState(null);
    // handle register
    const register=(email,password)=>{
       setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }

    // update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
             displayName: name,
             photoURL: photo,
         })
     }

    //  signin user
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signout
    const signout=()=>{
        setLoading(true);
        return signOut(auth)
        
    }

     // observer

     useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
            setUser(CurrentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo={
        register,
        handleUpdateProfile,
        login,
        setLoading,
        signout,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
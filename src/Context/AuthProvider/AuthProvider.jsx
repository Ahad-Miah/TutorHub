import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../Utils/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';
export const AuthContext=createContext();
const provider=new GoogleAuthProvider();
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
    // google login
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider)
    }

     // observer

     useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async CurrentUser => {

            if(CurrentUser?.email){
                setUser(CurrentUser);
                const {data}=await axios.post(`${import.meta.env.VITE_apiUrl}jwt`,{email:CurrentUser?.email},{withCredentials:true})  
            }else{
                setUser(CurrentUser)
                const {data}=await axios.get(`${import.meta.env.VITE_apiUrl}logout`,
                {withCredentials:true})  
            }
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
        loading,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure= axios.create({
    baseURL:import.meta.env.VITE_apiUrl,
    withCredentials:true
})



const useAxiosSecure=()=>{

    const {signout}=useContext(AuthContext);
    const navigate=useNavigate();
   
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },
        async error=>{
    
            if(error.response.status === 401 || error.response.status ===403){
                signout();
                navigate('/login');
            }
        })
    },[signout,navigate])
    
    return axiosSecure;
}

export default useAxiosSecure;
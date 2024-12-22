import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import loginAnimation from '../assets/Lottiefiles/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const {login,setLoading}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        login(email,password)
        .then(res => {
            e.target.reset();
            toast.success("Logged in! Congratulations!");
            navigate(location?.state ?location.state:"/");
          })
          .catch(err => {
            setLoading(false);
           toast.error("Error !Invalid Email or Password!");
          });
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center px-5 md:px-0">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md my-10">
                <div className="flex flex-col items-center">
                    {/* Lottie Animation */}
                    <div className="w-48 h-48">
                        <Lottie animationData={loginAnimation} height={200} width={200} />
                    </div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-700">Login to Your Account</h2>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">
                            <a href="#" className="text-black font-semibold">New to Website? <Link to='/register'><span className='hover:text-pink-600 underline'>Register</span></Link> </a>
                        </label>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 "
                        >
                            Login
                        </button>
                    </div>
                </form>
                {/* Google Login Button */}
                <div className="mt-6">
                    <button
                        className="w-full flex items-center justify-center py-2 px-4 border gap-2 border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-purple-700 hover:text-white"
                    >
                        <FaGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
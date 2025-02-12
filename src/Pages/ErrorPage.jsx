import React from 'react';
import { Link } from 'react-router-dom';
import errorAnimation from '../assets/Lottiefiles/error.json'
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
        <Helmet>
          <title>Error</title>
        </Helmet>
        <div className="text-center">
        
        <div className='w-[70%] md:w-[50%] mx-auto'>
            <Lottie animationData={errorAnimation}></Lottie>
        </div>
              <p className="mt-4 text-lg text-white/80 sm:text-xl px-9">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <div className="mt-6">
            <Link to="/">
              <button className="px-6 animate-bounce py-3 font-semibold text-purple-600 bg-white rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;
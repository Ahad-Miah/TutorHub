import React from 'react';
import { IoIosLogIn } from "react-icons/io";
import { ImFinder } from "react-icons/im";
import { MdStart } from "react-icons/md";
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <section className="relative py-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <Link to='/login'>
            <div className="bg-white items flex flex-col justify-center text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl h-[300px] transform transition duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-6 mx-auto">
                <IoIosLogIn  className='h-8 w-8' />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Step 1: Sign Up
              </h3>
              <p className="text-center text-gray-600">
                Create an account to start your journey with personalized tutoring
                solutions.
              </p>
            </div>
            </Link>
            
            {/* Step 2 */}
            <Link to="/findTutors/all">
            <div className="bg-white flex flex-col justify-center h-[300px] text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-6 mx-auto">
                <ImFinder className='h-8 w-8' />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Step 2: Find Your Tutor
              </h3>
              <p className="text-center text-gray-600">
                Browse through our curated list of experienced tutors tailored to your
                needs.
              </p>
            </div>
            </Link>
            {/* Step 3 */}
            <Link to="/findTutors/all">
            <div className="bg-white flex flex-col justify-center h-[300px] text-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-6 mx-auto">
                <MdStart className='h-8 w-8' />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Step 3: Start Learning
              </h3>
              <p className="text-center text-gray-600">
                Book your first session and embark on an exciting learning adventure
                today!
              </p>
            </div>
            </Link>
          </div>
      
          {/* Decorative Element */}
          <div
            className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white to-purple-400 rounded-full opacity-20 transform -translate-x-20 -translate-y-20"
            aria-hidden="true"
          ></div>
          {/* <div
            className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 transform -translate-x-20 translate-y-20"
            aria-hidden="true"
          ></div> */}
        </div>
      </section>
      
    );
};

export default HowItWorks;
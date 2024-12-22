import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const MyBookedTutors = () => {

    const[myBookedTutor,setMyBookedTutor]=useState([]);
    const {user}=useContext(AuthContext);

    useEffect(()=>{
        myBookedTutors()
    },[])

    const myBookedTutors=async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_apiUrl}bookedTutors/${user?.email}`)
        setMyBookedTutor(data);
    }
    console.log(myBookedTutor);
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
            Your Booked Tutors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutor Card */}
            {myBookedTutor?.map((tutor) => (
              <div key={tutor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={tutor?.image}
                  alt="Tutor"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Name: {tutor.name}
                  </h3>
                  <p className="text-gray-600 mb-1">Language: {tutor.language}</p>
                  <p className="text-gray-600 mb-3">Price: $ {tutor.price}</p>
                  <button className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 transition">
                    Leave a Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    );
};

export default MyBookedTutors;
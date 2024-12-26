import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const MyBookedTutors = () => {

  const axiosSecure=useAxiosSecure();
    const[myBookedTutor,setMyBookedTutor]=useState([]);
    const {user}=useContext(AuthContext);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        myBookedTutors()
    },[loading,myBookedTutor])

    const myBookedTutors=async()=>{
        const {data}=await axiosSecure.get(`bookedTutors/${user?.email}`)
        setMyBookedTutor(data);
        setLoading(false);
    }
    // console.log(myBookedTutor);
    const addReview=(id)=>{
        axios.patch(`${import.meta.env.VITE_apiUrl}add-review/${id}`,myBookedTutor)
        .then(result=>{
            if(result.data.acknowledged){
                toast.success("Review send Successfully");
            }
        })
        .catch(err=>console.log(err))
         
    }
    if(loading){
      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-3'>
        <div className="animate-pulse flex flex-col gap-4 p-4 w-full max-w-md mx-auto">
          {/* Image Skeleton */}
          <div className="bg-gray-300 h-48 w-full rounded-lg"></div>
  
          {/* Text Skeleton */}
          <div className="space-y-2">
            <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          </div>
  
          {/* Buttons or Tags Skeleton */}
          <div className="flex gap-2">
            <div className="bg-gray-300 h-8 w-20 rounded-full"></div>
            <div className="bg-gray-300 h-8 w-28 rounded-full"></div>
            <div className="bg-gray-300 h-8 w-16 rounded-full"></div>
          </div>
        </div>
        {/* two */}
        <div className="animate-pulse flex flex-col gap-4 p-4 w-full max-w-md mx-auto">
          {/* Image Skeleton */}
          <div className="bg-gray-300 h-48 w-full rounded-lg"></div>
  
          {/* Text Skeleton */}
          <div className="space-y-2">
            <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          </div>
  
          {/* Buttons or Tags Skeleton */}
          <div className="flex gap-2">
            <div className="bg-gray-300 h-8 w-20 rounded-full"></div>
            <div className="bg-gray-300 h-8 w-28 rounded-full"></div>
            <div className="bg-gray-300 h-8 w-16 rounded-full"></div>
          </div>
        </div>
        {/* three */}
        <div className="animate-pulse flex flex-col gap-4 p-4 w-full max-w-md mx-auto">
          {/* Image Skeleton */}
          <div className="bg-gray-300 h-48 w-full rounded-lg"></div>
  
          {/* Text Skeleton */}
          <div className="space-y-2">
            <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
            <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          </div>
  
          {/* Buttons or Tags Skeleton */}
          <div className="flex gap-2">
            <div className="bg-gray-300 h-8 w-20 rounded-full"></div>
            <div className="bg-gray-300 h-8 w-28 rounded-full"></div>
            <div className="bg-gray-300 h-8 w-16 rounded-full"></div>
          </div>
        </div>
      </div>
      )
    }
    return (
        <section className="py-20 px-6  min-h-screen">
          <Helmet>
            <title>My Booked Tutors || TutorHub</title>
          </Helmet>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold  text-center mb-8">
            Your Booked Tutors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutor Card */}
            {myBookedTutor?.map((tutor) => (
              <div key={tutor.id} className="bg-white rounded-2xl shadow-xl overflow-hidden  border-t-4 border-purple-500 border-b-2">
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
                  <button onClick={()=>addReview(tutor.tutorId)} className="w-full py-2 px-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 transition">
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
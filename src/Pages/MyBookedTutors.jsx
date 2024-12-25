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

    useEffect(()=>{
        myBookedTutors()
    },[])

    const myBookedTutors=async()=>{
        const {data}=await axiosSecure.get(`bookedTutors/${user?.email}`)
        setMyBookedTutor(data);
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
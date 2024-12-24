import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
// const tutors = [
//     {
//       id: 1,
//       name: "John Doe",
//       image: "https://via.placeholder.com/300",
//       language: "English",
//       description: "John is an experienced English tutor who specializes in improving spoken and written communication.",
//       price: "$25/hour",
//       review: 4.5,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       image: "https://via.placeholder.com/300",
//       language: "Spanish",
//       description: "Jane has 10+ years of experience teaching Spanish and tailoring lessons to individual needs.",
//       price: "$30/hour",
//       review: 4.7,
//     },
//     {
//       id: 3,
//       name: "Carlos Garcia",
//       image: "https://via.placeholder.com/300",
//       language: "French",
//       description: "Carlos is a native French speaker offering personalized lessons for all levels.",
//       price: "$20/hour",
//       review: 4.8,
//     },
//   ];

const Details = () => {

    const navigate=useNavigate();
  const {user}=useContext(AuthContext);
    const tutor=useLoaderData();
    const handleBooking=()=>{
      const info={
        tutorId:tutor._id,
        image:tutor.image,
        name:tutor.name,
        language:tutor.language,
        price:tutor.price,
        tutorEmail:tutor.email,
        email:user?.email
      }
      if(info.tutorEmail==info.email){
        return toast.error("Tutors can't booked his own tutorial");
      }
       axios.post(`${import.meta.env.VITE_apiUrl}bookedTutors`,info)
      .then(result=>{
          if(result.data.insertedId){
              toast.success("Booked Successfully");
              navigate('/myBookedTutors')
          }
      })
      .catch(err=>{
        toast.error("Already Booked");
      });
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 flex items-center justify-center">
        <div className="max-w-6xl w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Tutor Image */}
            <div className="h-72 md:h-auto">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Tutor Info */}
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Name:{tutor.name}</h2>
              <p className="text-lg text-gray-600 mb-4">
                <span className="font-semibold">Language:</span> {tutor.language}
              </p>
              <p className="text-gray-700 mb-6">Description:{tutor.description}</p>
  
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Price: {tutor.price}
              </p>
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Review: {tutor.review}
              </p>
  
              <button onClick={handleBooking} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
const tutors = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/300",
      language: "English",
      description: "John is an experienced English tutor who specializes in improving spoken and written communication.",
      price: "$25/hour",
      review: 4.5,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/300",
      language: "Spanish",
      description: "Jane has 10+ years of experience teaching Spanish and tailoring lessons to individual needs.",
      price: "$30/hour",
      review: 4.7,
    },
    {
      id: 3,
      name: "Carlos Garcia",
      image: "https://via.placeholder.com/300",
      language: "French",
      description: "Carlos is a native French speaker offering personalized lessons for all levels.",
      price: "$20/hour",
      review: 4.8,
    },
  ];

const Details = () => {

    const tutor=useLoaderData();
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
  
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;
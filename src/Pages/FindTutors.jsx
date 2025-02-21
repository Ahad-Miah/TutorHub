import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import noContent from '../assets/Lottiefiles/noContent.json';

// const tutors = [
//     {
//       id: 1,
//       name: "John Doe",
//       image: "https://via.placeholder.com/150",
//       language: "English",
//       review: 4.5,
//       details: "Experienced English tutor with a passion for teaching."
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       image: "https://via.placeholder.com/150",
//       language: "Spanish",
//       review: 4.7,
//       details: "Certified Spanish tutor with 10+ years of experience."
//     },
//     {
//       id: 3,
//       name: "Carlos Garcia",
//       image: "https://via.placeholder.com/150",
//       language: "French",
//       review: 4.8,
//       details: "Fluent French speaker offering personalized lessons."
//     }
//   ];

const FindTutors = () => {

  const { language } = useParams();
  const [tutors, setTutors] = useState();
  const [search, setSearch] = useState('');
  const [sort,setSort]=useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTutors()
  }, [language, search, loading,sort])

  const getTutors = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_apiUrl}tutorials?language=${language}&search=${search}&sort=${sort}`)
    setTutors(data);
    setLoading(false);
  }
  if (loading) {
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
  console.log(sort);
  return (
    <div className="px-6 lg:px-12 min-h-screen mb-12 mt-6">
      <Helmet>
        <title>Find Tutors || TutorHub</title>
      </Helmet>
      {/* bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 */}
      <div className='flex flex-col justify-center items-center gap-4 mb-8'>
        <h2 className="text-3xl font-bold text-center">
          Find a Tutor
        </h2>
        <div className='flex gap-4'>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tutors"
          className="input  input-bordered input-primary w-full max-w-xs" />
          <select onChange={(e)=>setSort(e.target.value)} className="select border-pink-500 w-full max-w-xs">
            <option disabled selected>Sort by Price</option>
            <option value={"assending"}>Low to high</option>
            <option value={"desending"}>High to low</option>
          </select>
        </div>
       
      </div>
      {
        (tutors?.length === 0) ?
          <div className="p-6 flex flex-col justify-center items-center">
            <div>
              <Lottie animationData={noContent}></Lottie>
            </div>
            <Link to="/">
              <button className='btn animate-bounce text-black'>Home</button>
            </Link>
          </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
            {tutors?.map((tutor) => (
              <div
                key={tutor.id}
                className=" bg-base-100 h-[420px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300  border-t-4 border-purple-500 border-b-2"
              >
                <div className='w-full h-40 p-2'>
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="px-6">
                  <h3 className="text-xl font-semibold mb-1">
                    {tutor.name}
                  </h3>
                  <p className="text-lg  mb-1">Language: {tutor.language}</p>
                  <p className="text-lg  mb-1">Review: {tutor.review}</p>
                  <p className=" text-sm mb-2">{tutor.description.slice(0, 50)}....</p>
                  <div className="badge badge-secondary mb-4">Price:${tutor.price}</div>
                  <Link to={`/details/${tutor._id}`}>
                    <button className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      }
    </div>
  );
};

export default FindTutors;
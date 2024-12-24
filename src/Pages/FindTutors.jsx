import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  const [search,setSearch]=useState('');

  useEffect(() => {
    getTutors()
  }, [language,search])

  const getTutors = async () => {
    const { data } = await axios.get( `${import.meta.env.VITE_apiUrl}tutorials?language=${language}&search=${search}`)
    setTutors(data);
  }
  if (tutors?.length === 0) {
    return <div className="p-6 min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center">
      <h1 className='text-3xl font-bold text-center text-white mb-8'>No Tutors in this Language</h1>
      <Link to="/">
        <button className='btn bg-white animate-bounce text-black'>Home</button>
      </Link>
    </div>
  }
  return (
    <div className="p-6 min-h-screen ">
      {/* bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 */}
      <div className='flex flex-col justify-center items-center gap-4 mb-8'>
      <h2 className="text-3xl font-bold text-center">
        Find a Tutor
      </h2>
      <input
        type="text"
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search tutors"
        className="input  input-bordered input-primary w-full max-w-xs" />
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {tutors?.map((tutor) => (
          <div
            key={tutor.id}
            className=" bg-base-100 h-[500px] rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300  border-t-4 border-purple-500 border-b-2"
          >
            <div className='w-full h-52 p-2'>
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {tutor.name}
              </h3>
              <p className="text-lg  mb-2">Language: {tutor.language}</p>
              <p className="text-lg  mb-2">Review: {tutor.review}</p>
              <p className=" text-sm mb-4">{tutor.description.slice(0, 90)}</p>
              <div className="badge badge-secondary mb-4">Price:$200</div>
              <Link to={`/details/${tutor._id}`}>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                  View Details
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTutors;
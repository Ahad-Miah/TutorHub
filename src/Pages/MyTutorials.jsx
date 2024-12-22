import React, { useContext, useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import axios from 'axios';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyTutorials = () => {

    const {user}=useContext(AuthContext);
    const[myTutorial,setMyTutorial]=useState([]);

    useEffect(()=>{
        getMyTutorials()
    },[])
    const getMyTutorials=async()=>{
        const {data}=await axios.get(`${import.meta.env.VITE_apiUrl}myTutorials/${user.email}`)
        setMyTutorial(data);
    }
    return (
        <section className="py-20 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
            My Tutorials
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-sm rounded-lg">
              <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <tr>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Image</th>
                  <th className="py-3 px-6 text-left">Language</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-left">Review</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myTutorial.map((tutorial) => (
                  <tr
                    key={tutorial.id} // Ensure each row has a unique key
                    className="hover:bg-gray-100 transition duration-200"
                  >
                    <td className="py-4 px-6 text-gray-800">{tutorial.name}</td>
                    <td className="py-4 px-6">
                      <img
                        src={tutorial.image}
                        alt="Tutorial"
                        className="w-12 h-12 rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-6 text-gray-800">{tutorial.language}</td>
                    <td className="py-4 px-6 text-gray-800">{tutorial.price}</td>
                    <td className="py-4 px-6 text-gray-800">
                      {tutorial.description.slice(0, 30)}...
                    </td>
                    <td className="py-4 px-6 text-gray-800">{tutorial.review}</td>
                    <td className="py-4 px-6 flex justify-center space-x-4">
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition"
                        onClick={() => handleDelete(tutorial.id)} 
                      >
                        <MdDeleteForever />
                      </button>
                      <Link to={`/update/${tutorial._id}`}>
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition"
                         
                      >
                        <LiaEditSolid />
                      </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
    );
};

export default MyTutorials;
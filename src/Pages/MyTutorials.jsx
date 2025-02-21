import React, { useContext, useEffect, useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import axios from 'axios';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
const MyTutorials = () => {

  const { user } = useContext(AuthContext);
  const [myTutorial, setMyTutorial] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getMyTutorials()
  }, [])
  const getMyTutorials = async () => {
    const { data } = await axiosSecure.get(`myTutorials/${user.email}`)
    setMyTutorial(data);
    setLoading(false);
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_apiUrl}tutorials/${id}`)
          .then(result => {
            if (result.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              getMyTutorials();
            }
          });
      }

    });
  }
  return (
    <section className="py-20 px-6 ">
      <Helmet>
        <title>My Tutorial || TutorHub</title>
      </Helmet>
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8">
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
            {
              loading ?
                // loading skeleton
                <>
                  <tbody>
                    <tr className="animate-pulse hover:bg-gray-100 transition duration-200">
                      <td className="py-4 px-6">
                        <div className="h-5 w-32 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-24 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-16 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-40 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-12 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6 flex justify-center space-x-4">
                        <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                        <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="animate-pulse hover:bg-gray-100 transition duration-200">
                      <td className="py-4 px-6">
                        <div className="h-5 w-32 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-24 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-16 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-40 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="h-5 w-12 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-6 flex justify-center space-x-4">
                        <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                        <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
                      </td>
                    </tr>
                  </tbody>
                </>
                :
                //main
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
                          onClick={() => handleDelete(tutorial._id)}
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
            }
          </table>
        </div>
      </div>
    </section>

  );
};

export default MyTutorials;
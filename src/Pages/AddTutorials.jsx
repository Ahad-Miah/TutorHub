import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const AddTutorials = () => {

    const{user}=useContext(AuthContext)
    const navigate=useNavigate();
    const handleAdd=(e)=>{
        e.preventDefault();

        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const image=form.image.value;
        const language=form.language.value;
        const price=form.price.value;
        const description=form.description.value;
        const review=parseInt(form.review.value);
        
        const tutorInfo={
            name,
            email,
            image,
            language,
            price,
            description,
            review
        }
        // console.log(tutorInfo);
        axios.post(`${import.meta.env.VITE_apiUrl}tutorials`,tutorInfo)
        .then(result=>{
            if(result.data.insertedId){
                form.reset();
                toast.success("Added Successfully");
                navigate('/myTutorials');
            }
        });

    }
    return (
        <section className="py-20 px-6  min-h-screen">
            <Helmet>
                <title>Add Tutorial || TutorHub</title>
            </Helmet>
            {/* bg-gradient-to-br from-indigo-500 to-purple-500 */}
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
                    Add a Tutorial
                </h2>
                <form onSubmit={handleAdd} className="space-y-6 ">
                    {/* Name */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={user?.displayName}
                            disabled
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-100"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            value={user?.email}
                            disabled
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-100"
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Tutorial Image Url
                        </label>
                        <input
                            type="text"
                            id="image"
                            name='image'
                            placeholder='Image url'
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Language */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Language
                        </label>
                        <select
                            id="category"
                            name='language'
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 
                            bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Korean</option>
                            <option>Chinese</option>
                            <option>Hindi</option>
                            <option>German</option>
                            <option>Italian</option>
                            <option>French</option>
                            <option>Japanese</option>
                        </select>
                    </div>
                    {/* Price */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Price ($)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name='price'
                            placeholder="Enter price"
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name='description'
                            placeholder="Write a brief description of the tutorial"
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        ></textarea>
                    </div>

                    {/* Review */}
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Review
                        </label>
                        <input
                            type="number"
                            id="review"
                            value="0"
                            disabled
                            className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-100"
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-6 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            Submit Tutorial
                        </button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default AddTutorials;
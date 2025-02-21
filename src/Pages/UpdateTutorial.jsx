import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTutorial = () => {

    const updateData=useLoaderData();
    // console.log("data",updateData);
    const navigate=useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const image=form.image.value;
        const language=form.language.value;
        const price=parseInt(form.price.value);
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
        axios.put(`${import.meta.env.VITE_apiUrl}tutorials/${updateData._id}`,tutorInfo)
        .then(result=>{
            form.reset();
            if(result.data.acknowledged){
                toast.success("Updated Successfully");
                console.log(result.data);
                navigate('/myTutorials')

            }
        });
    }
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-500 to-purple-500 min-h-screen">
            <Helmet>
                <title>Update Tutorial || TutorHub</title>
            </Helmet>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
                Update a Tutorial
            </h2>
            <form onSubmit={ handleUpdate} className="space-y-6">
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
                        value={updateData.name}
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
                        value={updateData.email}
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
                        defaultValue={updateData.image}
                        name='image'
                        required
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                        defaultValue={updateData.language}
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                        required
                        defaultValue={updateData.price}
                        placeholder="Enter price"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                        defaultValue={updateData.description}
                        required
                        placeholder="Write a brief description of the tutorial"
                        className="w-full p-3 mt-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                        value={updateData.review}
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
                        Update Tutorial
                    </button>
                </div>
            </form>
        </div>
    </section>
    );
};

export default UpdateTutorial;
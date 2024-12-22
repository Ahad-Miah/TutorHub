import React from 'react';

const AddTutorials = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-indigo-500 to-purple-500 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
                    Add a Tutorial
                </h2>
                <form className="space-y-6">
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
                            value="John Doe"
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
                            value="johndoe@example.com"
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
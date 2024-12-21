import React from 'react';
import { FaChalkboardTeacher, FaCommentDots, FaLanguage, FaUsers } from "react-icons/fa";
const Stat = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-3">
            <h2 className="text-4xl font-bold text-center mb-6">Our Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Tutors Count */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                    <FaChalkboardTeacher className="text-4xl text-yellow-400 mb-4" />
                    <h3 className="text-3xl font-semibold">1,200+</h3>
                    <p className="text-lg mt-2">Expert Tutors</p>
                </div>
                {/* Reviews Count */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                    <FaCommentDots className="text-4xl text-green-400 mb-4" />
                    <h3 className="text-3xl font-semibold">5,000+</h3>
                    <p className="text-lg mt-2">Verified Reviews</p>
                </div>
                {/* Languages Count */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                    <FaLanguage className="text-4xl text-blue-400 mb-4" />
                    <h3 className="text-3xl font-semibold">25+</h3>
                    <p className="text-lg mt-2">Languages Supported</p>
                </div>
                {/* Users Count */}
                <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                    <FaUsers className="text-4xl text-pink-400 mb-4" />
                    <h3 className="text-3xl font-semibold">10,000+</h3>
                    <p className="text-lg mt-2">Happy Users</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Stat;
import React from "react";
import { FaChalkboardTeacher, FaGlobe, FaUsers } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-10 px-8 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold mb-6">
                    About Us
                </h2>
                <p className="text-center text-lg mb-10 leading-relaxed">
                    Welcome to our platform! We aim to bridge the gap between
                    students and expert tutors across the globe. Offering a
                    wide range of languages and subjects, we provide a
                    user-friendly way to connect and learn, making education
                    accessible to everyone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <FaChalkboardTeacher className="text-purple-500 w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            Expert Tutors
                        </h3>
                        <p className="text-gray-600">
                            Connect with highly skilled tutors from around the
                            world in various subjects and languages.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <FaGlobe className="text-purple-500 w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            Global Reach
                        </h3>
                        <p className="text-gray-600">
                            Learn anytime, anywhere with our globally available
                            tutors and accessible booking process.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <FaUsers className="text-purple-500 w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                            Growing Community
                        </h3>
                        <p className="text-gray-600">
                            Join a thriving community of learners and tutors
                            dedicated to personal and professional growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

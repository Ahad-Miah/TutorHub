import React from 'react';
import { FaBook, FaChalkboard, FaCertificate, FaClock } from "react-icons/fa";

const Services = () => {
    return (
        <div id='service' className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-extrabold mb-6">
                Our Services
            </h2>
            <p className="text-center text-lg mb-10 leading-relaxed">
                Explore the wide range of services we offer to help you
                achieve your learning goals. From language lessons to
                professional skills, we are here to assist you every step
                of the way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Service 1 */}
                <div className="bg-white flex flex-col justify-center rounded-lg transform transition duration-300 hover:scale-105 shadow-lg p-6 text-center">
                    <FaBook className="text-blue-500 w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Personalized Lessons
                    </h3>
                    <p className="text-gray-600">
                        Tailored lessons to fit your unique learning needs
                        and goals.
                    </p>
                </div>
                {/* Service 2 */}
                <div className="bg-white flex flex-col justify-center rounded-lg transform transition duration-300 hover:scale-105 shadow-lg p-6 text-center">
                    <FaChalkboard className="text-blue-500 w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Experienced Tutors
                    </h3>
                    <p className="text-gray-600">
                        Connect with tutors who are experts in their
                        respective fields.
                    </p>
                </div>
                {/* Service 3 */}
                <div className="bg-white flex flex-col justify-center rounded-lg transform transition duration-300 hover:scale-105 shadow-lg p-6 text-center">
                    <FaCertificate className="text-blue-500 w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Certification Support
                    </h3>
                    <p className="text-gray-600">
                        Get guidance and training for certifications in
                        various subjects.
                    </p>
                </div>
                {/* Service 4 */}
                <div className="bg-white flex flex-col justify-center rounded-lg transform transition duration-300 hover:scale-105 shadow-lg p-6 text-center">
                    <FaClock className="text-blue-500 w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        Flexible Scheduling
                    </h3>
                    <p className="text-gray-600">
                        Learn at your own pace with our flexible session
                        timings.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Services;
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-10 ">
                    {/* Column 1 */}
                    <div className='md:text-left'>
                        <h2 className="text-xl font-bold mb-4">TutorHub</h2>
                        <p className="text-sm">
                            Your one-stop platform for finding and booking the best tutors worldwide.
                        </p>
                        <div className="mt-4 flex space-x-4 justify-center md:justify-start">
                            <p  className="text-white hover:text-yellow-400">
                                <FaGithub  className='w-6 h-6'/>
                            </p>
                            <p  className="text-white hover:text-yellow-400">
                        <FaFacebookSquare className='w-6 h-6' />
                            </p>
                            <p  className="text-white hover:text-yellow-400">
                                <FaTwitterSquare  className='h-6 w-6'/>
                            </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className='md:text-left'>
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                            <li><p className="hover:text-yellow-400">About Us</p></li>
                            <li><p className="hover:text-yellow-400">Services</p></li>
                            <li><p className="hover:text-yellow-400">Contact</p></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className='md:text-left'>
                        <h2 className="text-lg font-bold mb-4">Resources</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li><p className="hover:text-yellow-400">FAQs</p></li>
                            <li><p className="hover:text-yellow-400">Blog</p></li>
                            <li><p className="hover:text-yellow-400">Support</p></li>
                            <li><p className="hover:text-yellow-400">Privacy Policy</p></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center border-t border-gray-200 pt-4">
                    <p className="text-sm">&copy; 2024 TutorHub. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
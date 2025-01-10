import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex justify-around items-center">
                    {/* Column 1 */}
                    <div className='text-center md:text-left'>
                        <h2 className="text-xl font-bold mb-4">TutorHub</h2>
                        <p className="text-sm">
                            Your one-stop platform for finding <br /> and booking the best tutors worldwide.
                        </p>
                        <div className="mt-4 flex space-x-4 justify-center md:justify-start">
                            <a href='https://www.linkedin.com/in/md-ahad-miah' target='_blank' className="text-white hover:text-yellow-400">
                                <FaLinkedin  className='w-6 h-6'/>
                            </a>
                            <a href='https://www.facebook.com/bappa.miah.98/' target='_blank'  className="text-white hover:text-yellow-400">
                        <FaFacebookSquare className='w-6 h-6' />
                            </a>
                            <a  href='https://x.com/i/flow/single_sign_on' target='_blank' className="text-white hover:text-yellow-400">
                                <FaTwitterSquare  className='h-6 w-6'/>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className=' text-center mt-6 md:text-left'>
                        <hr className='md:hidden'/>
                        <h2 className="text-lg font-bold my-4">Quick Links</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                            <li><a href='#aboutUs'><p className="hover:text-yellow-400">About us</p></a></li> 
                           <li><a href='#service'><p className="hover:text-yellow-400">Services</p></a></li> 
                            {/* <li><p className="hover:text-yellow-400">Contact</p></li> */}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    {/* <div className='md:text-left'>
                        <h2 className="text-lg font-bold mb-4">Resources</h2>
                        <ul className="space-y-2 cursor-pointer">
                            <li><p className="hover:text-yellow-400">FAQs</p></li>
                            <li><p className="hover:text-yellow-400">Blog</p></li>
                            <li><p className="hover:text-yellow-400">Support</p></li>
                            <li><p className="hover:text-yellow-400">Privacy Policy</p></li>
                        </ul>
                    </div> */}
                </div>

                <div className="mt-8 text-center border-t border-gray-200 pt-4">
                    <p className="text-sm">&copy; 2025 TutorHub. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
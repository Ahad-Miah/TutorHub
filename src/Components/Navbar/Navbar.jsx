import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
// all navlink
    const links = <>
        <li><NavLink to="/" className="text-lg text-white hover:text-yellow-400">Home</NavLink></li>
        <li><NavLink to="/findTutors" className="text-lg text-white hover:text-yellow-400">Find Tutors</NavLink></li>
        <li><NavLink to="/addTutorials" className="text-lg text-white hover:text-yellow-400">Add Tutorials</NavLink></li>
        <li><NavLink to="/myTutorials" className="text-lg text-white hover:text-yellow-400">My Tutorials</NavLink></li>
        <li><NavLink to="/myBookedTutors" className="text-lg text-white hover:text-yellow-400">My Booked Tutors</NavLink></li>
        <li>
            <Link
                to="login"
                className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-lg hover:bg-yellow-500"
            >
                Sign Up
            </Link>
        </li>
    </>
// hamburger icon
    const hamburger=<>
      <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
    </>
// cross icon
    const crossIcon=<>
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        >
                         </path>
                    </svg>
    </>

    return (
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-3xl font-extrabold text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Tutor<span className="text-white">Hub</span></span>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none hover:text-yellow-400"
                        >
                            {
                                isOpen?crossIcon:hamburger
                            }
                        </button>
                    </div>
                    <ul className="hidden lg:flex space-x-8">
                        {links}
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                       {links}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
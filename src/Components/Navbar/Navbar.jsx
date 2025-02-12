import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { IoIosSunny } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { toast } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // theme toogle
    const [themeToggle, setThemeToggle] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme]);

    const handleToggle = () => {
        setThemeToggle(!themeToggle);

        if (themeToggle) {
            setTheme("dark");
            toast.success(`Theme changed to dark`)
        }
        else {
            setTheme("light");
            toast.success(`Theme changed to light`)
        }
    }
    const { signout, user, loading } = useContext(AuthContext);
    // console.log(user)
    // sign out
    const handleSignout = () => {
        signout()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }
    // user profile
    const profile = <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user?.displayName}
                    data-tooltip-place="bottom"
                >
                    <Tooltip id='my-tooltip'></Tooltip>
                    <img
                        referrerPolicy='no-referrer'
                        alt={user?.displayName}
                        src={user?.photoURL} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <a className="justify-between text-black">
                        {user?.displayName}
                    </a>
                </li>
            </ul>
        </div>
    </>
    // all navlink
    const links = <>
        <li><NavLink to="/" className="text-lg text-white hover:text-yellow-400">Home</NavLink></li>
        <li><NavLink to="/findTutors/all" className="text-lg text-white hover:text-yellow-400">Find Tutors</NavLink></li>
        <li><NavLink to="/contactUs" className="text-lg text-white hover:text-yellow-400">Contact</NavLink></li>
        {
            user && <>
                <div className='lg:hidden items-center justify-center text-center *:mb-4'>
                    <li><NavLink to="/addTutorials" className="text-lg text-white hover:text-yellow-400">Add Tutorials</NavLink></li>
                    <li><NavLink to="/myTutorials" className="text-lg text-white hover:text-yellow-400">My Tutorials</NavLink></li>
                    <li><NavLink to="/myBookedTutors" className="text-lg text-white hover:text-yellow-400">My Booked Tutors</NavLink></li>
                </div>
                <div className="dropdown hidden lg:block dropdown-hover">
                    <div tabIndex={0} role="button" className="text-lg flex items-center text-white hover:text-yellow-400 hover:text-[20px] hover:font-bold"> My Panel <MdKeyboardArrowDown className='text-3xl'/></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-box z-[1] w-52 p-2 shadow">
                        <li><NavLink to="/addTutorials" className="text-lg text-white hover:text-yellow-400">Add Tutorials</NavLink></li>
                        <li><NavLink to="/myTutorials" className="text-lg text-white hover:text-yellow-400">My Tutorials</NavLink></li>
                        <li><NavLink to="/myBookedTutors" className="text-lg text-white hover:text-yellow-400">My Booked Tutors</NavLink></li>
                    </ul>
                </div>

            </>
        }
        <li className='flex justify-center items-center gap-3'>

            {loading ? <span className="loading loading-ring loading-lg"></span>
                : <>
                    {user ? <>
                        <button
                            onClick={handleSignout}
                            to="login"
                            className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-lg hover:bg-yellow-500"
                        >
                            Log Out
                        </button>
                        {profile}
                    </> :
                        <>
                            <Link
                                to="login"
                                className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg shadow-lg hover:bg-yellow-500"
                            >
                                Sign Up
                            </Link>
                        </>}
                </>
            }

        </li>
    </>
    // hamburger icon
    const hamburger = <>
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
    const crossIcon = <>
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
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg sticky z-10 top-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-3xl font-extrabold text-white">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Tutor<span className="text-white">Hub</span></span>
                    </Link>
                    <div className="lg:hidden flex gap-3">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none hover:text-yellow-400"
                        >
                            {
                                isOpen ? crossIcon : hamburger
                            }
                        </button>
                        <div onClick={handleToggle} className='p-2'>
                            {
                                themeToggle ? <FiMoon className="h-10 bg-[#24292E] text-white rounded-full w-10" /> : <IoIosSunny className="h-10 bg-yellow-500 text-white rounded-full w-10" />
                            }
                        </div>
                    </div>
                    <ul className="hidden lg:flex lg:items-center space-x-8">
                        {links}
                        <div onClick={handleToggle} className='p-2'>
                            {
                                themeToggle ? <FiMoon className="h-10 bg-[#24292E] text-white rounded-full w-10" /> : <IoIosSunny className="h-10 bg-yellow-500 text-white rounded-full w-10" />
                            }
                        </div>
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
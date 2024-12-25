import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher, FaLanguage, FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import axios from 'axios';
const Stat = () => {
    const [counterOn, setCounterOn] = useState(false);
    const [users,setUsers]=useState([]);
    const [tutors,setTutors]=useState([]);
    const [reviews,setReviews]=useState();

    useEffect(()=>{
        fetchUsers()
        fetchTutors()
    },[])

    useEffect(() => {
        const totalReviews = tutors.reduce((sum, item) => sum + (item.review || 0), 0);
        setReviews(totalReviews);
      }, [tutors]); 

    const fetchUsers=async()=>{
            const {data}=await axios.get(`${import.meta.env.VITE_apiUrl}users`);
            setUsers(data);
    }
    
    const fetchTutors=async()=>{
        const { data } = await axios.get( `${import.meta.env.VITE_apiUrl}tutorials?language=all`)
        setTutors(data);
    }
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
                <div className="max-w-7xl mx-auto px-3">
                    <h2 className="text-4xl font-bold text-center mb-6">Our Achievements</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Tutors Count */}
                        <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                            <FaChalkboardTeacher className="text-4xl text-yellow-400 mb-4" />
                            <h3 className="text-3xl font-semibold">{counterOn && <CountUp end={tutors.length} duration={2} delay={0} />}+</h3>
                            <p className="text-lg mt-2">Expert Tutors</p>
                        </div>
                        {/* Reviews Count */}
                        <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                            <FaStar  className="text-4xl text-green-400 mb-4" />
                            <h3 className="text-3xl font-semibold">{counterOn && <CountUp end={reviews} duration={2} delay={0} />}+</h3>
                            <p className="text-lg mt-2">Verified Reviews</p>
                        </div>
                        {/* Languages Count */}
                        <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                            <FaLanguage className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-3xl font-semibold">{counterOn && <CountUp end={9} duration={2} delay={0} />}+</h3>
                            <p className="text-lg mt-2">Languages Supported</p>
                        </div>
                        {/* Users Count */}
                        <div className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:scale-105 transform transition duration-300">
                            <FaUsers className="text-4xl text-pink-400 mb-4" />
                            <h3 className="text-3xl font-semibold">{counterOn && <CountUp end={users.length} duration={2} delay={0} />}+</h3>
                            <p className="text-lg mt-2">Happy Users</p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>

    );
};

export default Stat;
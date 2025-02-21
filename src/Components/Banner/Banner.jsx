import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className=" md:h-[60%] w-full"
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <div className="relative h-[360px]">
                   <div className='h-[360px]'>
                   <img
                        src={b1}
                        alt="Slide 1"
                        className="h-full w-full object-cover"
                    />
                   </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                            Learn Anytime, Anywhere
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Discover expert tutors to boost your skills.
                        </p>
                       <Link to='/findTutors/all'>
                       <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500">
                            Get Started
                        </button>
                       </Link>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <div className="relative h-[360px]">
                <div className='h-[360px]'>
                   <img
                        src={b2}
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                   </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                            Empower Your Future
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Learn from the best tutors worldwide.
                        </p>
                       <Link to='/findTutors/all'>
                       <button className="mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600">
                            Explore Tutors
                        </button>
                       </Link>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
                <div className="relative h-[360px]">
                <div className='h-[360px]'>
                   <img
                        src={b3}
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                   </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                            Join the Learning Revolution
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Flexible schedules, diverse courses, expert mentors.
                        </p>
                      <Link to='/findTutors/all'>
                      <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
                            Start Now
                        </button>
                      </Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Banner;
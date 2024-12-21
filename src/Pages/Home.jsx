import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stat from '../Components/Stat/Stat';

const Home = () => {
    return (
        <div className=''>
            <section>
            <Banner></Banner>
            </section>
            <section>
            <Stat></Stat>
            </section>
        </div>
    );
};

export default Home;
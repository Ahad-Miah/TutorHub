import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stat from '../Components/Stat/Stat';
import Category from '../Components/Category/Category';

const Home = () => {
    return (
        <div className=''>
            <section>
            <Banner></Banner>
            </section>
            <section>
            <Stat></Stat>
            </section>
            <section>
                <Category></Category>
            </section>
        </div>
    );
};

export default Home;
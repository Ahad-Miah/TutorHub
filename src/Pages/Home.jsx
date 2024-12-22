import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stat from '../Components/Stat/Stat';
import Category from '../Components/Category/Category';
import Features from '../Components/Features/Features';
import HowItWorks from '../Components/HowITWorks/HowItWorks';

const Home = () => {
    return (
        <div className=''>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Category></Category>
            </section>
            <section>
                <Stat></Stat>
            </section>
            <section>
                <Features></Features>
            </section>
            <section>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Home;
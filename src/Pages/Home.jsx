import React from 'react';
import Banner from '../Components/Banner/Banner';
import Stat from '../Components/Stat/Stat';
import Category from '../Components/Category/Category';
import Features from '../Components/Features/Features';
import HowItWorks from '../Components/HowITWorks/HowItWorks';
import { Helmet } from 'react-helmet-async';
import AboutUs from '../Components/AboutUs/AboutUs';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home || TutorHub</title>
            </Helmet>
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
            <section>
                <AboutUs></AboutUs>
            </section>
        </div>
    );
};

export default Home;
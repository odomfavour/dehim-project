import React from 'react';
import Header from '../components/Header';
import Hero from '../components/hero/Hero';
import SuiteOverview from '../components/overview/SuiteOverview';
import ProdFeatures from '../components/prodFeatures/prodFeatures';
import Testimonials from '../components/testimonials/testimonials';
import WhyDehim from '../components/whyDehim/WhyDehim';
import Footer from '../components/footer/Footer';


const index = () => {
    return (
        <div>
            <Header />
            <Hero />
            <WhyDehim />
            <SuiteOverview/>
            <ProdFeatures/>
            <Testimonials/>
            <Footer/>
        </div>
    );
};

export default index;

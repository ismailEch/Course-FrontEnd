//  import React from 'react'
import Navbar from "../../../components/User//Navbar";
import HeroSection from "../../../components/User//Hero-section";
import Footer from "../../../components/User//Footer";
import AboutUs from '../../../components/User//AboutUs';
import PopularCategory from "../../../components/User/PopularCategory";

function About() {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <AboutUs/>
            <PopularCategory/>
            <Footer/>
        
        </div>
    )
}

export default About;


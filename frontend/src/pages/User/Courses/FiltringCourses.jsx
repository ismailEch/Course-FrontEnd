import React from 'react'
import Navbar from "../../../components/User/Navbar";
import HeroSection from "../../../components/User/Hero-section";
import CategoryCourses from '../../../components/User/CategoryCourses';
import Footer from "../../../components/User/Footer";
import PopularCategory from "../../../components/User/PopularCategory";

function FiltringCourses() {
  return (
    <div>
            <Navbar/>
            <HeroSection/>
            <CategoryCourses/>
            <PopularCategory/>
            <Footer/>
    </div>
  )
}

export default FiltringCourses

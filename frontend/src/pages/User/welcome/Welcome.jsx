//  import React from 'react'
import Navbar from "../../../components/User/Navbar";
import HeroSection from "../../../components/User/Hero-section";
import EnrollPage from "../../../components/User/EnrollPage";
import Footer from "../../../components/User/Footer";
import PopularCategory from "../../../components/User/PopularCategory";

function Welcome() {
   return (
      <div className="">
         <Navbar/>
         <HeroSection/>
         <EnrollPage/>
         <PopularCategory/>
         <Footer/>
      </div>
   )
}

export default Welcome


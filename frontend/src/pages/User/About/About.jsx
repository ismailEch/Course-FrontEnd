// import React from 'react';
import Navbar from '../../../components/User/Navbar';
import HeroSection from '../../../components/User/Hero-section';
import AboutUsSection from '../../../components/User/AboutUsSection';
import MissionSection from '../../../components/User/MissionSection';
import PopularCategory from '../../../components/User/PopularCategory';
import FeaturesSection from '../../../components/User/FeaturesSection';
import CallToActionSection from '../../../components/User/CallToActionSection';
import Footer from '../../../components/User/Footer';

const AboutUs = () => {
  return (
    <div className="bg-purple-900 text-white min-h-screen">
      <Navbar/>
      <HeroSection />
      <AboutUsSection />
      <MissionSection />
      <PopularCategory />
      <FeaturesSection />
      <CallToActionSection />
      <Footer/>
    </div>
  );
}

export default AboutUs;
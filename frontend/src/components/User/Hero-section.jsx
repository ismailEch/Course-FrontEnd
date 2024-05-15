// import React from 'react';
import hero from "../../assets/hero.svg";
const HeroSection = () => {
  return (
    <div className="flex justify-center items-center bg-primary text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">DISCOVER ENRICHING COURSES, <br className="lg:hidden"/>ELEVATE YOUR SKILLS </p>
              <p className="text-base lg:text-lg mb-8">Empower your growth with our cutting-edge online <br className="lg:hidden"/>learning platform and resources.</p>
            <div className="flex items-center space-x-4">
              <input type="text" placeholder="Search courses" className="px-4 py-2 w-full border border-gray-300 text-black rounded-md focus:outline-none focus:border-purple-400"/>
              <button className="px-6 py-2 bg-white text-purple-900 rounded-md font-medium hover:bg-purple-100 transition duration-300">Search</button>
            </div>
          </div>

          <div className="">
            <img src={hero} alt="Vector Image" className="hidden md:block w-full"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;

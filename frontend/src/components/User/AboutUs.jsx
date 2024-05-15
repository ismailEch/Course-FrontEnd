// import React from 'react';
import Aboutimg from "../../assets/about.svg"
const AboutSection = () => {
    return (
      <div className="flex justify-center items-center bg-primary py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-18 mb-8 lg:mb-2">
              <img src= {Aboutimg} alt="About" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
              <p className="text-lg  text-white lg:text-lg mb-6">
              At ACADEMIA, we're passionate about redefining education for<br/> the digital age. 
              Our cutting-edge Learning Management System provides a dynamic
              online platform where learners of all backgrounds<br/> can access 
              high-quality courses tailored to their needs. From <br/>professional development 
              to personal enrichment, our comprehensive catalog offers a vast array of subjects
               taught by expert instructors.<br/> We believe in the transformative power of education
                to change lives and shape the future. Join us in our mission to democratize
                 learning and empower individuals worldwide to thrive in an ever-evolving world.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;
  
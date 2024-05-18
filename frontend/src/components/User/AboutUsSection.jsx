// import React from 'react';
import AboutImg from "../../assets/about.svg";

const AboutUsSection = () => {
  return (
    <section className="flex justify-center items-center bg-primary text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
          <img src={AboutImg} alt="About Us" className="hidden md:block w-full" />
        </div>
        <div className="md:w-1/2 px-4">
          <h2 className="text-4xl font-bold  text-white mb-4">About us</h2>
          <p className="text-lg text-justify leading-relaxed">
            At AC<span className="text-red-600">A</span>DEMIA, we're passionate about redefining education 
            for the  digital age. Our cutting-edge Learning Management System provides a dynamic online 
            platform where learners of all backgrounds can access high-quality courses tailored to their needs.
             From professional development to personal enrichment, our comprehensive catalog offers a vast array 
             of subjects taught by expert instructors. We believe in the transformative power of education to change
              lives and shape the future. Join us in our mission to democratize learning and empower individuals
               worldwide to thrive in an ever-evolving world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;

// import React from 'react';
import MissionImg from '../../assets/about1.png';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <motion.section
      className="flex justify-center items-center bg-primary text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 px-4 order-2 md:order-1 w-11/12"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to democratize education and make high-quality <br />
            learning accessible to everyone, regardless of their background <br />
            or location. We believe that by providing engaging and practical<br />
            courses, we can inspire lifelong learning and help individuals <br />
            thrive in today's ever-evolving digital landscape.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 px-4 order-1 md:order-2 mb-8 md:mb-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={MissionImg} alt="Our Mission" className="w-full rounded" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection;

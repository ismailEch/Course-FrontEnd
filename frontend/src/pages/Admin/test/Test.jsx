import React from 'react';
import { FaUserGraduate } from "react-icons/fa6";
import logo from '../../../assets/Logo (2).svg';

const Test = () => {
  return (
    <div className="relative min-h-screen bg-primary to-gray-900 flex flex-col items-center justify-center">
      {/* Logo at the top left corner */}
      <img src={logo} alt="Logo" className="absolute top-4 left-4 w-30 h-30" />

      <h1 className="text-white text-3xl font-bold mb-8">Join as a client or freelancer</h1>
      <div className="flex space-x-8">
        <div className="relative bg-[#524870] text-white p-6 rounded-lg shadow-lg w-60 h-60 hover:bg-primary-700 hover:opacity-80 hover:shadow-2xl hover:cursor-pointer transition duration-300 ease-in-out">
          <div className="absolute top-2 left-2 bg-white text-[#524870] p-2 rounded-full">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3a3 3 0 100 6 3 3 0 000-6zM6 9a4 4 0 100 8h8a4 4 0 100-8H6z" />
            </svg>
          </div>
          <p className="text-lg mt-20 text-center">I'm a student, seeking courses to study</p>
        </div>
        <div className="relative bg-[#524870] text-white p-6 rounded-lg shadow-lg w-60 h-60 hover:bg-primary-700 hover:opacity-80 hover:shadow-2xl hover:cursor-pointer transition duration-300 ease-in-out">
          <div className="absolute top-2 left-2 bg-white text-[#524870] p-2 rounded-full">
            <FaUserGraduate className="w-10 h-10" />
          </div>
          <p className="text-lg mt-20 text-center">I'm a freelancer, looking for work</p>
        </div>
      </div>
      <button className="mt-8 bg-white text-purple-800 py-2 px-6 rounded-3xl shadow-lg">Apply as a freelancer</button>
      <p className="text-white mt-4">Already have an account? <a href="#" className="underline text-pink">Log In</a></p>
    </div>
  );
}

export default Test;

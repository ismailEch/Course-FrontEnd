// import React from 'react';
import logo from '../../assets/logo.svg';
import { SlBasket } from "react-icons/sl";

const Navbar = () => {

return (
    <nav className="flex items-center justify-between px-4 py-2 bg-primary">
        <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-white flex items-center pr-5 hover: ">  
            <img src={logo} alt="" className="w-auto h-24" />  
        </a>
        </div>
        <ul className="hidden md:flex space-x-4 list-none text-white">
            <li>
            <a  className="hover:text-opacity-75">Home</a>
            </li>
            <li>
            <a  className="hover:text-opacity-75">About</a>
            </li>
            <li>
            <a  className="hover:text-opacity-75">Courses</a>
            </li>
            <li>
            <a  className="hover:text-opacity-75">Contact</a>
            </li>
        </ul>
        
        <div className="flex items-center space-x-2  ml-[350px] "> {/* Buttons */}
        <button className="px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400 ">Get Started</button>
        <button className="px-3 py-2 rounded-md  text-white bg-secondary hover:bg-purple-400  ">Login</button>
        </div>
        <SlBasket className="w-6 h-6 text-white mr-10 " />
    </nav>
    );
};

export default Navbar;

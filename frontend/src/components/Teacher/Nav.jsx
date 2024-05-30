import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileModal from './ProfileModal';
import { FaUserAlt } from "react-icons/fa";

const Nav = ({ toggleSidebar }) => {
    const [searchText, setSearchText] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();  

    const handleLogout = () => {
        localStorage.removeItem('token_teacher');
        navigate('/teacher/login');
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleProfileClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-primary border-b border-gray-200">
            <div className="flex items-center">
                <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <span className="ml-4 text-white font-bold">MY DASHBOARD</span>
            </div>
            <div className="flex items-center">
                <input 
                    className="mx-4 w-72 sm:w-96 border rounded-md px-4 py-2" 
                    type="text" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={handleInputChange}
                />
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center text-white hover:text-gray-400 focus:outline-none focus:text-secondary">
                        <FaUserAlt className="h-6  w-6" />
                    </button>
                    {showDropdown && (
                        <div className="absolute right-0 top-10 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
                            <div onClick={handleProfileClick} className="px-4 py-2 cursor-pointer">PROFILE</div>
                            <hr className="border-gray-200" />
                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                LOGOUT
                            </button>
                        </div>
                    )}
                </div>
                {showModal && <ProfileModal onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default Nav;

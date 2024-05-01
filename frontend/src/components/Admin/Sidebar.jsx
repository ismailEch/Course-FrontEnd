import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom';


function Sidebar() {

    const navigate = useNavigate();  

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/user/login');
    };
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className={`fixed top-0 left-0 z-10 bg-gray-100 w-64 h-screen overflow-y-auto transition-transform duration-300 ease-in-out transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:sticky md:flex md:flex-col md:w-64 md:bg-transparent md:overflow-y-visible md:shadow-md`}>
                <div className="bg-blue-500 p-2 rounded-full mb-8">
                    <img src={logo} alt="Logo" className="h-12 mx-auto" />
                </div>

                <nav className="flex-1">
                    <ul className="flex flex-col gap-2 justify-end">
                        <li className="flex items-center justify-center p-2 hover:bg-gray-200">
                            <Link to="/admin/dashboard" className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                {/* Render text only on laptop screens */}
                                <span className="hidden md:inline ml-2">Dashboard</span>
                            </Link>
                        </li>

                        <li className="flex items-center justify-center p-2 hover:bg-gray-200">
                            <Link to="/admin/users" className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.65 15.35a6 6 0 018.7 0M20 8V6a4 4 0 00-8 0v2" />
                                </svg>
                                <span className="hidden md:inline ml-2">Users</span>
                            </Link>   
                        </li>

                        <li className="flex items-center justify-center p-2 hover:bg-gray-200">
                            <Link to="/admin/teachers" className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0 0a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="hidden md:inline ml-2">Teachers</span>
                            </Link>   
                        </li>

                        <li className="flex items-center justify-center p-2 hover:bg-gray-200">
                            <Link to="/admin/categories" className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4v3m0 0v3m0-3h3m-3 0h3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                <span className="hidden md:inline ml-2">Categories</span>
                            </Link>   
                        </li>

                        <li className="flex items-center justify-center p-2 hover:bg-gray-200">
                            <Link to="/admin/plans" className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                <span className="hidden md:inline ml-2">Plnas</span>
                            </Link>   
                        </li>

                        <li className="flex items-center justify-center p-2 hover:bg-gray-200">
                            <li  className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 17l5-5m0 0l-5-5m5 5H8m10 4V3a2 2 0 00-2-2H4a2 2 0 00-2 2v18a2 2 0 002 2h12a2 2 0 002-2z" />
                                </svg>
                                <button  className="hidden md:inline ml-2" onClick={handleLogout}>Logout</button>
                            </li>   
                        </li>

                    </ul>
                </nav>

                {/* Close button for mobile */}
                <button className="absolute top-0 right-0 mr-4 mt-4 md:hidden" onClick={() => setShowSidebar(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
      )
}

export default Sidebar


{/* <Link to="/admin/dashboard"></Link>  */}
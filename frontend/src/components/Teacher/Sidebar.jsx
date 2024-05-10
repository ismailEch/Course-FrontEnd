import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    return (
        <div className={`md:flex md:flex-col bg-gray-800 ${isSidebarOpen ? 'w-full' : 'w-64 hidden md:block'}`}>
            <div className="flex items-center justify-between h-16 bg-gray-900">
                <span className="text-white font-bold m-auto uppercase">Dashboard</span>
                <button onClick={toggleSidebar} className="text-gray-300 focus:outline-none md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col flex-1 justify-center overflow-y-auto">
                <nav className="flex-1 px-2 py-4 bg-gray-800">
                    <Link to={'/teacher/dashboard'} className="flex items-center justify-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Dashboard
                    </Link>

                    <Link to={'/teacher/courses'} className="flex items-center justify-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        My Courses
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

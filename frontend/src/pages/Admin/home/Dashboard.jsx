import React from 'react'
import Navbar from '../../../components/Admin/Navbar'

function Dashboard() {
    return (
         <div className=' className="flex flex-col w-full lg:flex-row"'>
            <Navbar />
            {/* <aside id="sidebar" className="z-20 bg-white lg:shadow-lg lg:left-0 lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:h-full fixed w-60 flex-shrink-0 transform -translate-x-full transition-transform duration-200 ease-in-out">
                     <div className="px-3 py-4 lg:px-5 lg:py-6">
                        <div className="flex justify-between">
                           <a href="#" className="flex items-center justify-start">
                              <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6" alt="Windster Logo" />
                              <span className="ml-2 text-xl font-semibold text-gray-800">Windster</span>
                           </a>
                           <button id="toggleSidebar" aria-expanded="true" aria-controls="sidebar" className="lg:hidden text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                              </svg>
                           </button>
                        </div>
                     </div>
                     <div className="px-3 py-4 lg:px-5 lg:py-6">
                        <ul className="mb-4 lg:mb-0">
                           <li className="mt-1">
                              <a href="#" className="flex items-center py-2.5 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">
                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                 </svg>
                                 <span className="ml-3">Dashboard</span>
                              </a>
                           </li>
                           <li className="mt-1">
                              <a href="#" className="flex items-center py-2.5 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">
                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 6v10a2 2 0 002 2h8a2 2 0 002-2V12l3-6H3zm9 2v10H7V8m2-3h2m4 0h2m-2 3h-2"></path>
                                 </svg>
                                 <span className="ml-3">Projects</span>
                              </a>
                           </li>
                           <li className="mt-1">
                              <a href="#" className="flex items-center py-2.5 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">
                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                 </svg>
                                 <span className="ml-3">Tasks</span>
                              </a>
                           </li>
                        </ul>
                     </div>
            </aside > */}
        </div>
    )
}

export default Dashboard

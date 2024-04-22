import React from 'react'
import {Link } from 'react-router-dom';




function Welcome() {
  return (
    
    <div className="h-screen flex items-center justify-start">
	
	<div className="flex flex-col items-center w-40 h-full overflow-hidden text-indigo-300 bg-indigo-900 rounded">
		<a className="flex items-center w-full px-3 mt-3" href="#">
    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 16a3 3 0 016-1h2a3 3 0 016 1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z" />
    </svg>
			<span className="ml-2 text-sm font-bold">ACDEMIA</span>
		</a>
		<div className="w-full px-2">
			<div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
        <Link to="/admin/users" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700">
                  <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium">Dashboard</span>
        </Link>
        

        <Link to="/admin/users" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Users</span>
        </Link>

        <Link to="/admin/teachers" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Teachers</span>
        </Link>

        <Link to="/admin/categories" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Categories</span>
        </Link>

        <Link to="/admin/plans" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700">
                <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium">Plnas</span>
        </Link> 

			</div>
			{/* <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<span className="ml-2 text-sm font-medium">Products</span>
				</a>
				<a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
					<svg className="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
					</svg>
					<span className="ml-2 text-sm font-medium">Settings</span>
				</a>
				<a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
					<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
					<span className="ml-2 text-sm font-medium">Messages</span>
					<span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</a>
			</div> */}
		</div>
		<a className="flex items-center justify-center w-full h-16 mt-auto bg-indigo-800 hover:bg-indigo-700" href="#">
			<svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span className="ml-2 text-sm font-medium">Log Out</span>
		</a>
	</div>

    </div>
  )
}

export default Welcome


{/* <ul className="flex flex-col gap-4">
  {Array.isArray(plan.features) && plan.features.map((feature, index) => (
      <li key={index} className="flex items-center gap-4">
          <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
              </svg>
          </span>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">{feature}</p>
      </li>
  ))}
</ul> */}

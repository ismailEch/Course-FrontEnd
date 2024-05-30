// import React from 'react'
import './Stylee.css'

function AdminNavbar() {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" data-navbar-main="true" data-navbar-scroll="true">
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav>
                    <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                        <li className="text-sm leading-normal">
                            <a className="opacity-50 text-slate-700" href="javascript:void(0);">Pages</a>
                        </li>
                        <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
                    </ol>
                    <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
                </nav>
            </div>
        </nav>
    );
}

export default AdminNavbar;

import React, { useState } from 'react';
import Sidebar from '../../../components/Teacher/Sidebar'
import Nav from '../../../components/Teacher/Nav'
import Content from './Content'

function Courses() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-y-auto">
            <Nav toggleSidebar={toggleSidebar} />
            <div className="mt-8">
                <Content />
            </div>
        </div>
    </div>
)
}

export default Courses

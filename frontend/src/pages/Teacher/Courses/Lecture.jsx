import React, { useState } from 'react';
import Sidebar from '../../../components/Teacher/Sidebar'
import Nav from '../../../components/Teacher/Nav'
import Content from './LectureCreate'

function Lecture() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-y-auto">
            <Nav toggleSidebar={toggleSidebar} />
            <Content />
        </div>
    </div>
)
}

export default Lecture

// import React from 'react';
import { useNavigate } from "react-router-dom";

import AdminNavbar from '../../../components/Admin/AdminNavbar';
import Sidebar from '../../../components/Admin/Sidebar';

function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        
      </div>
    </div>
  );
}

export default Dashboard;

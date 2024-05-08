import React from 'react'
import { useNavigate } from "react-router-dom";

import Navbar from '../../../components/Admin/Navbar'
import Sidebar from '../../../components/Admin/Sidebar'

function Dashboard() {
      const navigate = useNavigate();
   return (
         <Sidebar />
   )
}

export default Dashboard

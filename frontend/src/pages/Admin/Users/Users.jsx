import React from 'react'
import Sidebar from '../../../components/Admin/Sidebar'
import AdminNavbar from '../../../components/Admin/AdminNavbar'
import Table from '../Users/Table'

function Users() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='content w-full'>
        <AdminNavbar />
        <Table className="p-2" />
      </div>
    </div>
  )
}

export default Users

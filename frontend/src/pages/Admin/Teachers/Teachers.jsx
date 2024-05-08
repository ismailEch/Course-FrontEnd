import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchTeachers, removeTeacher } from '../../../slice/Admin/Teacher/teacherSlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Teachers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teachers = useSelector(state => state.teachers.teachers.teachers);
    const error = useSelector(state => state.teachers.error);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {   
            navigate("/user/login");
        }
        dispatch(fetchTeachers());
    }, teachers);

    const [searchInput, setSearchInput] = useState('');
    const [filteredTeachers, setFilteredTeachers] = useState([]);

    useEffect(() => {
        setFilteredTeachers(filterTeachers(teachers, searchInput));
    }, [teachers, searchInput]);

    const filterTeachers = (teachers, searchInput) => {
      if (!teachers) return []; // Check if teachers is undefined or null
        return teachers.filter(teacher =>
                teacher.FirstName.toLowerCase().includes(searchInput.toLowerCase()) ||
                teacher.LastName.toLowerCase().includes(searchInput.toLowerCase()) ||
                teacher.email.toLowerCase().includes(searchInput.toLowerCase())
        );
  };

    const handleDeleteTeacher = (teacherId) => {
        if (window.confirm("Are you sure you want to delete this teacher?")) {
            dispatch(removeTeacher(teacherId))
            .then(()=>{
                toast.success('Success delete Teacher !')
            }).catch(()=>{
                toast.error('Failed to delete Teacher');
            })
        }
    };

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div className='content w-full p-6'>
                <AdminNavbar className='content overflow-y-auto w-full p-6' />
                <div className="mt-8 px-3 mb-6 flex justify-between items-center ">
                    <h1 className="text-2xl font-semibold">Teachers</h1>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-md p-2 mr-2"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </div>
                </div>

                {Array.isArray(filteredTeachers)  && filteredTeachers.length === 0 && (
                    <div className="text-center my-4">No teachers found</div>
                )}

                {Array.isArray(filteredTeachers) && filteredTeachers.length > 0 && (
                    <div className="table-container mt-8 px-3 h-[450px] overflow-auto rounded-lg mb-6" style={{ backgroundColor: '#f4f4f4' }}>
                        <table className="relative w-full bg-white shadow-md rounded-s-lg">
                            <thead className="sticky top-0 bg-white shadow-sm z-10">
                                <tr className="text-gray-400 sticky text-start border-b">
                                    <th className="font-medium  p-3 text-center">Name</th>
                                    <th className="font-medium  p-3 text-center">Email</th>
                                    <th className="font-medium  p-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTeachers.map((teacher) => (
                                    <tr key={teacher._id} className="hover:bg-gray-100 cursor-pointer rounded-md border-b">
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{teacher.FirstName} {teacher.LastName}</td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{teacher.email}</td>
                                        <td className="text-center">
                                            <div className="flex justify-center">
                                                <MdDelete className='text-2xl text-red-600 hover:text-red-800 cursor-pointer' onClick={() => handleDeleteTeacher(teacher._id)}/>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Teachers;

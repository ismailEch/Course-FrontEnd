import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchTeachers, removeTeacher } from '../../../slice/Admin/Teacher/teacherSlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DeleteConfirmationModal from './DeleteConfirmationModal';

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
    }, [teachers]);

    const [searchInput, setSearchInput] = useState('');
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        setFilteredTeachers(filterTeachers(teachers, searchInput));
    }, [teachers, searchInput]);

    const filterTeachers = (teachers, searchInput) => {
        if (!teachers) return [];
        return teachers.filter(teacher =>
            teacher.FirstName.toLowerCase().includes(searchInput.toLowerCase()) ||
            teacher.LastName.toLowerCase().includes(searchInput.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchInput.toLowerCase())
        );
    };

    const handleDeleteTeacher = (teacherId) => {
        setSelectedTeacher(teacherId);
        setShowDeleteConfirmationModal(true);
    };

    const handleConfirmDeleteTeacher = () => {
        dispatch(removeTeacher(selectedTeacher))
            .then(() => {
                toast.success('Success delete Teacher!');
            })
            .catch(() => {
                toast.info('Success delete Teacher!');
            });
        setShowDeleteConfirmationModal(false);
        setSelectedTeacher(null);
    };

    const handleCancelDeleteTeacher = () => {
        setShowDeleteConfirmationModal(false);
        setSelectedTeacher(null);
    };

    // Pagination logic
    const indexOfLastTeacher = currentPage * itemsPerPage;
    const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
    const currentTeachers = filteredTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

    const paginate = (event, value) => setCurrentPage(value);

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

                {Array.isArray(currentTeachers) && currentTeachers.length === 0 && (
                    <div className="text-center my-4">No teachers found</div>
                )}

                {Array.isArray(currentTeachers) && currentTeachers.length > 0 && (
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
                                {currentTeachers.map((teacher) => (
                                    <tr key={teacher._id} className="hover:bg-gray-100 cursor-pointer rounded-md border-b">
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{teacher.FirstName} {teacher.LastName}</td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{teacher.email}</td>
                                        <td className="text-center">
                                            <div className="flex justify-center">
                                                <MdDelete className='text-2xl text-red-600 hover:text-red-800 cursor-pointer' onClick={() => handleDeleteTeacher(teacher._id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 px-3 flex justify-start">
                            <Pagination count={Math.ceil(filteredTeachers.length / itemsPerPage)} color="primary" page={currentPage} onChange={paginate} />
                        </div>
                    </div>
                )}

                {showDeleteConfirmationModal && (
                    <DeleteConfirmationModal
                        onCancel={handleCancelDeleteTeacher}
                        onConfirm={handleConfirmDeleteTeacher}
                    />
                )}
            </div>
        </div>
    );
}

export default Teachers;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../../slice/Admin/Courses/CoursesSlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import '../style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Courses() {
    const dispatch = useDispatch();
    const { courses, loading, error } = useSelector(state => state.courses.courses);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div className='content w-full p-6'>
                <AdminNavbar className='content overflow-y-auto w-full p-6' />

                {loading && (
                    <div className="text-center my-4">Loading...</div>
                )}

                {Array.isArray(courses) && courses.length === 0 && !loading && (
                    <div className="text-center my-4">No courses found</div>
                )}

                {Array.isArray(courses) && courses.length > 0 && (
                    <div className="table-container mt-8 px-3 h-[450px] overflow-auto rounded-lg mb-6" style={{ backgroundColor: '#f4f4f4' }}>
                        <table className="relative w-full bg-white shadow-md rounded-s-lg">
                            <thead className="sticky top-0 bg-white shadow-sm z-10">
                                <tr className="text-gray-400 sticky text-start border-b">
                                    <th className="font-medium p-3 text-center">Cover</th>
                                    <th className="font-medium p-3 text-center">Teacher</th>
                                    <th className="font-medium p-3 text-center">language</th>
                                    <th className="font-medium p-3 text-center">price</th>
                                    <th className="font-medium p-3 text-center">valid</th>
                                    <th className="font-medium p-3 text-center">view</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course) => (
                                    <tr key={course._id} className="hover:bg-gray-100 cursor-pointer rounded-md border-b">
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">
                                            <img  src={course.cover} alt={course.name} className="w-16 h-16 object-cover mx-auto" />
                                        </td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">
                                            {course.instructor?.FirstName ?? 'N/A'}
                                        </td>                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{course.language}</td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">${course.price}</td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{course.valid ? 'Yes' : 'No'}</td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">
                                            <button className="text-blue-500 hover:underline" onClick={() => console.log(`View course ${course._id}`)}>View</button>
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

export default Courses;

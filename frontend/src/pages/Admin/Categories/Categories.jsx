import React, { useState } from 'react';
import Sidebar from '../../../components/Admin/Sidebar';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdEdit, MdDeleteOutline } from "react-icons/md";

function Categories() {
    const [selectedStudent, setSelectedStudent] = useState(null);

    const fakeData = [
        {
            _id: 1,
            name: "John Doe",
            email: "john@example.com",
            mobile: "+1234567890",
            course: "Web Development",
            batch: "Morning",
            paymentStatus: "Pending",
        },
        {
            _id: 2,
            name: "Jane Doe",
            email: "jane@example.com",
            mobile: "+9876543210",
            course: "Data Science",
            batch: "Evening",
            paymentStatus: "Completed",
        },
        // Add more fake data as needed
    ];

    const handleEdit = (student) => {
        // Handle edit functionality here
    };

    const handleDelete = (studentId) => {
        // Handle delete functionality here
    };

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div  style={{ backgroundColor: '#eee' }} className="table-container mt-8 px-3 h-[450px] overflow-y-auto mb-6 ">
                <table className="relative">
                    <thead className="sticky top-0 bg-white shadow-sm z-10">
                        <tr className="text-gray-400 sticky text-start border-b">
                            <th className="font-medium text-start p-3" style={{ width: "170px", overflow: "hidden" }}>Name</th>
                            <th className="font-medium text-start p-3" style={{ width: "260px", overflow: "hidden" }}>Email</th>
                            <th className="font-medium text-start p-3" style={{ width: "180px", overflow: "hidden" }}>Phone no.</th>
                            <th className="font-medium text-start p-3" style={{ width: "180px", overflow: "hidden" }}>Course</th>
                            <th className="font-medium text-start p-3" style={{ width: "150px", overflow: "hidden" }}>Batch</th>
                            <th className="font-medium text-start p-3" style={{ width: "150px", overflow: "hidden" }}>Fee Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeData.map((student) => (
                            <tr
                                key={student._id}
                                className={`${selectedStudent === student._id ? "bg-gray-100" : ""} hover:bg-gray-100 cursor-pointer rounded-md`}
                            >
                                <td className="font-normal pr-4 text-gray-700 text-start p-3 text-[15px]" style={{ maxWidth: "170px", overflow: "hidden" }}>{student.name}</td>
                                <td className="font-normal pr-4 text-gray-700 text-start p-3 text-[15px]" style={{ maxWidth: "260px", overflow: "hidden" }}>{student.email}</td>
                                <td className="font-normal pr-4 text-gray-700 text-start p-3 text-[15px]" style={{ maxWidth: "180px", overflow: "hidden" }}>{student.mobile}</td>
                                <td className="font-normal pr-4 text-gray-700 text-start p-3 text-[15px]" style={{ maxWidth: "180px", overflow: "hidden" }}>{student.course}</td>
                                <td className="font-normal pr-4 text-gray-700 text-start p-3 text-[15px]" style={{ maxWidth: "150px", overflow: "hidden" }}>{student.batch}</td>
                                <td className={`font-normal pr-4 text-gray-700 text-start p-3 text-[15px] ${student.paymentStatus === "Pending" ? "text-orange-500" : "text-green-500"}`} style={{ maxWidth: "150px", overflow: "hidden" }}>{student.paymentStatus}</td>
                                <td>
                                    <div className="relative">
                                        <HiOutlineDotsVertical
                                            className="cursor-pointer"
                                            onClick={() => setSelectedStudent(student._id)}
                                        />
                                        {selectedStudent === student._id && (
                                            <div className="absolute z-[8] right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                <button
                                                    onClick={() => handleEdit(student)}
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left flex items-center gap-1 text-gray-500"
                                                >
                                                    <MdEdit /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(student._id)}
                                                    className="px-4 py-2 text-sm hover:bg-gray-100 w-full text-left flex items-center gap-1 text-gray-500"
                                                >
                                                    <MdDeleteOutline /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Categories;

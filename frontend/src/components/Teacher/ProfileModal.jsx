import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        password: ''
    });

    useEffect(() => {
        const fetchTeacherInfo = async () => {
            const teacherId = localStorage.getItem('id_teacher');
            if (teacherId) {
                try {
                    const response = await fetch(`http://localhost:3000/api/teacher/${teacherId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch teacher information');
                    }
                    const data = await response.json();
                    const teacherData = data.Teacher;
                    setFormData({
                        firstName: teacherData.FirstName,
                        lastName: teacherData.LastName,
                        phone: teacherData.phone,
                        password: '' // Exclude password for security reasons
                    });
                } catch (error) {
                    console.error('Error fetching teacher info:', error);
                }
            }
        };
        fetchTeacherInfo();
    }, []);
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formIsValid = true; 
        const updatedFormData = { ...formData };
    
        // Check if any field is empty and update its border color
        for (const key in updatedFormData) {
            if (key !== 'password' && !updatedFormData[key]) {
                formIsValid = false;
                const inputElement = document.getElementById(key);
                if (inputElement) {
                    inputElement.style.borderColor = 'red';
                }
            }
        }
    
        // If form is not valid, stop the submission
        if (!formIsValid) {
            toast.error('Please fill in all required fields.');
            return;
        }
    
        // Proceed with form submission if all fields are filled
        const teacherId = localStorage.getItem('id_teacher');
        if (teacherId) {
            try {
                const response = await fetch(`http://localhost:3000/api/teacher/${teacherId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        FirstName: updatedFormData.firstName,
                        LastName: updatedFormData.lastName,
                        phone: updatedFormData.phone,
                        password: updatedFormData.password
                    })
                });
                if (!response.ok) {
                    throw new Error('Failed to update teacher information');
                }
                // Close the modal after successful update
                onClose();
                console.log('Update successful'); 
                toast.success('Update Profile successful!')
            } catch (error) {
                console.error('Error updating teacher info:', error);
            }
        }
    };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="mx-auto w-full max-w-[550px] bg-white rounded-md shadow-lg p-6">
                <span className="absolute top-0 right-0 cursor-pointer" onClick={onClose}>&times;</span>
                <h2 className="text-lg text-center font-semibold mb-6">Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="-mx-3 mb-5">
                        <div className="px-3">
                            <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
                                First Name
                            </label>
                            <input type="text" name="firstName" id="fName" placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="px-3 mt-4">
                            <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">
                                Last Name
                            </label>
                            <input type="text" name="lastName" id="lName" placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="px-3 mt-4">
                            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                        <div className="px-3 mt-4">
                            <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                                New Password
                            </label>
                            <input type="password" name="password" id="password" placeholder="New Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button type="submit"
                            className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none mr-4">
                            Update
                        </button>
                        <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileModal;

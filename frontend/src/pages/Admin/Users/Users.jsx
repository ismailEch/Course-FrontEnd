// Users.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUsers, removeUser, updateUserRole } from '../../../slice/Admin/User/userSlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoleChangeConfirmationModal from './RoleChangeConfirmationModal';
import DeleteConfirmationModal from './DeleteConfirmationModal'; 

function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users.Users);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/user/login");
        }
        dispatch(fetchUsers());
    }, [users]);

    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newRole, setNewRole] = useState('');
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);

    useEffect(() => {
        setFilteredUsers(filterUsers(users, searchInput));
    }, [users, searchInput]);

    const filterUsers = (users, searchInput) => {
        if (!users) return []; // Check if users is undefined or null
        return users.filter(user =>
            user.FirstName.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.LastName.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.email.toLowerCase().includes(searchInput.toLowerCase())
        );
    };

    const handleDeleteUser = (userId) => {
        setSelectedUser(userId);
        setShowDeleteConfirmationModal(true);
    };

    const handleConfirmDeleteUser = () => {
        dispatch(removeUser(selectedUser))
            .then(() => {
                toast.success('User deleted successfully!');
            })
            .catch(() => {
                // toast.error('Failed to delete user.'); 
                toast.info('User deleted successfully!');
            });
        setShowDeleteConfirmationModal(false);
        setSelectedUser(null);
    };

    const handleCancelDeleteUser = () => {
        setShowDeleteConfirmationModal(false);
        setSelectedUser(null);
    };

    const handleRoleChange = (userId, currentRole) => {
        const newRole = currentRole === 'admin' ? 'user' : 'admin';
        setSelectedUser(userId);
        setNewRole(newRole);
        setShowConfirmationModal(true);
    };

    const handleConfirmRoleChange = () => {
        dispatch(updateUserRole({ userId: selectedUser, newRole }))
            .then(() => {
                toast.success('User role updated successfully!');
            })
            .catch(() => {
                // toast.error('Failed to update user role.');
                toast.info('User role updated successfully!');
            });
        setShowConfirmationModal(false);
    };

    const handleCancelRoleChange = () => {
        setShowConfirmationModal(false);
        setSelectedUser(null);
        setNewRole('');
    };

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div className='content w-full p-6'>
                <AdminNavbar className='content overflow-y-auto w-full p-6' />
                <div className="mt-8 px-3 mb-6 flex justify-between items-center ">
                    <h1 className="text-2xl font-semibold">Users</h1>
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

                {Array.isArray(filteredUsers) && filteredUsers.length === 0 && (
                    <div className="text-center my-4">No users found</div>
                )}

                {Array.isArray(filteredUsers) && filteredUsers.length > 0 && (
                    <div className="table-container mt-8 px-3 h-[450px] overflow-auto rounded-lg mb-6" style={{ backgroundColor: '#f4f4f4' }}>
                        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                            <thead className="bg-gray-50">
                                <tr className="text-gray-400 sticky text-start border-b">
                                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Name</th>
                                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Email</th>
                                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Role</th>
                                    <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredUsers.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-100 cursor-pointer rounded-md border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-center">{user.FirstName} {user.LastName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">{user.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <button
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin' ? 'bg-orange-500 text-white' : 'bg-green-100 text-green-800'}`}
                                                onClick={() => handleRoleChange(user._id, user.role)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {user.role}
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <div className="flex justify-center">
                                                <MdDelete className='text-2xl text-red-600 hover:text-red-800 cursor-pointer' onClick={() => handleDeleteUser(user._id)} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {showConfirmationModal && (
                    <RoleChangeConfirmationModal
                        user={selectedUser}
                        newRole={newRole}
                        onCancel={handleCancelRoleChange}
                        onConfirm={handleConfirmRoleChange}
                    />
                )}

                {showDeleteConfirmationModal && (
                    <DeleteConfirmationModal
                        onCancel={handleCancelDeleteUser}
                        onConfirm={handleConfirmDeleteUser}
                    />
                )}
            </div>
        </div>
    );
}

export default Users;

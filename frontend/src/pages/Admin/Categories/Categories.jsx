import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchData, removeCategory, createNewCategory, updateExistingCategory } from '../../../slice/Admin/Category/categorySlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import '../style.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Categories() { 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const categories = useSelector(state => state.categories.categories.categories); 
    const error = useSelector(state => state.categories.error);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {   
            navigate("/user/login");
        }
        dispatch(fetchData());
    }, categories);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [errors, setErrors] = useState({
        name: '',
        description: ''
    });
    const [searchInput, setSearchInput] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        setFilteredCategories(filterCategories(categories, searchInput));
    }, [categories, searchInput]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (!value.trim()) {
            setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.` });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const filterCategories = (categories, searchInput) => {
        return categories ? categories.filter(category =>
            category.name.toLowerCase().includes(searchInput.toLowerCase())
        ) : [];
    };

    const handleDeleteCategory = (categoryId) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            dispatch(removeCategory(categoryId))
            .then(()=>{
                toast.success('Success delete Category !')
            }).catch(()=>{
                toast.success('Success delete Category !');
            })
        }
    };

    const handleUpdateCategory = (categoryId) => {
        const categoryToUpdate = categories.find(category => category._id === categoryId);
        setSelectedCategory(categoryToUpdate);
        setFormData({
            name: categoryToUpdate.name,
            description: categoryToUpdate.description
        });
        setUpdateMode(true);
        setShowForm(true);
    };

    const handleCreateCategory = (e) => {
        e.preventDefault();
        let hasError = false;
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                setErrors({ ...errors, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.` });
                hasError = true;
            } else {
                setErrors({ ...errors, [key]: '' });
            }
        });
        if (hasError) return;

        if (updateMode) {
            dispatch(updateExistingCategory({ id: selectedCategory._id, categoryData: formData }))
            .then(() => {
                toast.success('Category updated successfully');
            })
            .catch(() => {
                toast.success('Category updated successfully');
            });
            setUpdateMode(false);
        } else {
            dispatch(createNewCategory(formData))
                .then(() => {
                    toast.success('Category created successfully');
                })
                .catch(() => {
                    toast.success('Category created successfully');
                });
        }
        setShowForm(false);
        setFormData({
            name: '',
            description: ''
        });
    };

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div className='content w-full p-6'>
                <AdminNavbar className='content overflow-y-auto w-full p-6' />
                <div className="mt-8 px-3 mb-6 flex justify-between items-center ">
                    <input type="text" placeholder="Search" className="border border-gray-300 rounded-md p-2 mr-2" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4" onClick={() => setShowForm(true)}>+ Add New</button>
                </div>

                {Array.isArray(categories)  && categories.length === 0 && (
                    <div className="text-center my-4">No categories found</div>
                )}

                {Array.isArray(categories) && categories.length > 0 && (
                    <div className="table-container mt-8 px-3 h-[450px] overflow-auto rounded-lg mb-6" style={{ backgroundColor: '#f4f4f4' }}>
                        <table className="relative w-full bg-white shadow-md rounded-s-lg">
                            <thead className="sticky top-0 bg-white shadow-sm z-10">
                                <tr className="text-gray-400 sticky text-start border-b">
                                    <th className="font-medium  p-3 text-center">Name</th>
                                    <th className="font-medium  p-3 text-center">Description</th>
                                    <th className="font-medium  p-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(filteredCategories) && filteredCategories.map((category) => (
                                    <tr key={category._id} className="hover:bg-gray-100 cursor-pointer rounded-md border-b">
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{category.name}</td>
                                        <td className="font-normal pr-4 text-gray-700 p-3 text-center">{category.description}</td>
                                        <td className="text-center">
                                            <div className="flex items-center justify-center"> {/* Added justify-center to center the icons horizontally */}
                                                <FaEdit className='text-2xl text-blue-500 hover:text-blue-800 cursor-pointer mr-3' onClick={() => handleUpdateCategory(category._id)}/>
                                                <MdDelete className='text-2xl text-red-600 hover:text-red-800 cursor-pointer' onClick={() => handleDeleteCategory(category._id)}/>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {showForm && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                            <div className="px-8 py-6">
                                <h2 className="text-2xl font-semibold mb-4">{updateMode ? 'Update Category' : 'Create New Category'}</h2>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 block w-full"  required />
                                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 block w-full"  required />
                                    {errors.description && <span className="text-red-500">{errors.description}</span>}
                                </div>
                            </div>
                            <div className="flex justify-end px-8 py-4 bg-gray-100 rounded-b-lg">
                                <button type="button" onClick={() => setShowForm(false)} className="mr-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</button>
                                <button type="button" onClick={handleCreateCategory} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">{updateMode ? 'Update Category' : 'Create Category'}</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Categories;

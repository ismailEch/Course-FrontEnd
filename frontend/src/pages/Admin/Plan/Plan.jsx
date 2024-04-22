import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, removePlan, createNewPlan, updateExistingPlan } from '../../../slice/Admin/Plan/planSlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import '../style.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Plan() {
    const dispatch = useDispatch();
    const plans = useSelector(state => state.plans.plans);
    const error = useSelector(state => state.plans.error);

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        dispatch(fetchData());
    }, [plans]);
    
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: ''
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [errors, setErrors] = useState({
        name: '',
        price: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'price') {
            if (!value || isNaN(value) || parseFloat(value) <= 0) {
                setErrors({ ...errors, [name]: 'Price must be a number greater than 0.' });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        } else if (!value.trim()) {
            setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.` });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleDeletePlan = (planId) => {
        if (window.confirm("Are you sure you want to delete this plan?")) {
            dispatch(removePlan(planId))
                .then(() => {
                    setSuccessMessage('Plan deleted successfully');
                    setTimeout(() => setSuccessMessage(''), 4000); // Hide after 4 seconds
                })
                .catch((error) => {
                    setErrorMessage('Failed to delete plan');
                    setTimeout(() => setErrorMessage(''), 4000); // Hide after 4 seconds
                });
        }
    };

    const handleUpdatePlan = (planId) => { 
        const planToUpdate = plans.find(plan => plan._id === planId);
        setSelectedPlan(planToUpdate);
        setFormData({ 
            name: planToUpdate.name,
            price: planToUpdate.price,
            description: planToUpdate.description
        });
        setUpdateMode(true); 
        setShowForm(true);
    };

    const handleCreatePlan = (e) => {
        e.preventDefault();
        let hasError = false;
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                setErrors({ ...errors, [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.` });
                hasError = true;
            } else if (key === 'price' && isNaN(formData[key]) || parseFloat(formData[key]) <= 0) {
                setErrors({ ...errors, [key]: 'Price must be a number greater than 0.' });
                hasError = true;
            } else {
                setErrors({ ...errors, [key]: '' });
            }
        });
        if (hasError) return;
        
        if (updateMode) { 
            dispatch(updateExistingPlan({ id: selectedPlan._id, planData: formData }))
                .then(() => {
                    setSuccessMessage('Plan updated successfully');
                    setTimeout(() => setSuccessMessage(''), 4000); // Hide after 4 seconds
                })
                .catch((error) => {
                    setErrorMessage('Failed to update plan');
                    setTimeout(() => setErrorMessage(''), 4000); // Hide after 4 seconds
                });
            setUpdateMode(false); 
        } else { 
            dispatch(createNewPlan(formData))
                .then(() => {
                    setSuccessMessage('Plan created successfully');
                    setTimeout(() => setSuccessMessage(''), 4000); // Hide after 4 seconds
                })
                .catch((error) => {
                    setErrorMessage('Failed to create plan');
                    setTimeout(() => setErrorMessage(''), 4000); // Hide after 4 seconds
                });
        }
        setShowForm(false);
        setFormData({
            name: '',
            price: '',
            description: ''
        });
    };

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div className='content w-full p-6'>
                <AdminNavbar className='content overflow-y-auto w-full p-6' />
                <div className="mb-8">
                    <h1 className="text-xl font-semibold mb-4">Plans</h1>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4" onClick={() => setShowForm(true)}>Create New Plan</button>
                </div>
                 {/* Success notification */}
                {successMessage && (
                    <div className={`fixed top-0 left-0 right-0 mx-auto w-full max-w-md bg-${successMessage.includes('created') ? 'green' : successMessage.includes('updated') ? 'yellow' : 'red'}-500 text-white px-4 py-3 rounded-md shadow-md`}>
                        {successMessage}
                    </div>
                )}

                {/* Error notification */}
                {errorMessage && (
                    <div className="fixed top-0 left-0 right-0 mx-auto w-full max-w-md">
                        <div className="bg-red-500 text-white px-4 py-3 rounded-md shadow-md">
                            {errorMessage}
                        </div>
                    </div>
                )}
                <div className="flex justify-center flex-wrap">
                    {plans && plans.map(plan => (
                        <div key={plan._id} className="relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8 m-1.5">
                            <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">{plan.name}</p>
                                <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                    <span className="mt-2 text-4xl">$</span>{plan.price}
                                    <span className="self-end text-4xl">/year</span>
                                </h1>
                            </div>   
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">{plan.description}</p>
                                </div>
                            </div>

                            <div className="p-0 mt-12 flex justify-between">
                                <FaEdit
                                    className='text-2xl text-orange-600 hover:text-red-800 cursor-pointer mr-3'
                                    onClick={() => handleUpdatePlan(plan._id)}
                                />
                                <MdDelete
                                    className='text-2xl text-red-600 hover:text-red-800 cursor-pointer'
                                    onClick={() => handleDeletePlan(plan._id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {showForm && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
                            <div className="px-8 py-6">
                                <h2 className="text-2xl font-semibold mb-4">{updateMode ? 'Update Plan' : 'Create New Plan'}</h2>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 block w-full"  required />
                                    {errors.name && <span className="text-red-500">{errors.name}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Price</label>
                                    <input type="text" name="price" value={formData.price} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 block w-full"  required />
                                    {errors.price && <span className="text-red-500">{errors.price}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleInputChange} className="border border-gray-300 rounded-md p-2 block w-full"  required />
                                    {errors.description && <span className="text-red-500">{errors.description}</span>}
                                </div>
                            </div>
                            <div className="flex justify-end px-8 py-4 bg-gray-100 rounded-b-lg">
                                <button type="button" onClick={() => setShowForm(false)} className="mr-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</button>
                                <button type="button" onClick={handleCreatePlan} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">{updateMode ? 'Update Plan' : 'Create Plan'}</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Plan;

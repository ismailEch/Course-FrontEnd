import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchData, removePlan, createNewPlan, updateExistingPlan } from '../../../slice/Admin/Plan/planSlice';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import '../style.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Plan() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const plans = useSelector(state => state.plans.plans);
    const error = useSelector(state => state.plans.error);

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {   
            navigate("/user/login");
        }
        dispatch(fetchData());
    }, [plans]);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        stripePriceId: '',
        features: ['', '', '']
    });
    const [updateMode, setUpdateMode] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [errors, setErrors] = useState({
        name: '',
        price: '',
        description: '',
        stripePriceId: '',
        features: ['', '', '']
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name.startsWith('feature')) {
            const index = parseInt(name.split('-')[1], 10);
            const updatedFeatures = [...formData.features];
            updatedFeatures[index] = value;
            setFormData({ ...formData, features: updatedFeatures });
        } else {
            setFormData({ ...formData, [name]: value });
            if (!value.trim()) {
                setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required.` });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        }
    };

    const handleDeletePlan = (planId) => {
        if (window.confirm("Are you sure you want to delete this plan?")) {
            dispatch(removePlan(planId))
                .then(() => {
                    toast.success('Plan deleted successfully');
                    setTimeout(() => setSuccessMessage(''), 4000); 
                })
                .catch(() => {
                    setErrorMessage('Failed to delete plan');
                    setTimeout(() => setErrorMessage(''), 4000); 
                });
        }
    };

    const handleUpdatePlan = (planId) => { 
        const planToUpdate = plans.find(plan => plan._id === planId);
        setSelectedPlan(planToUpdate);
        setFormData({ 
            name: planToUpdate.name,
            price: planToUpdate.price,
            description: planToUpdate.description,
            stripePriceId: planToUpdate.stripePriceId,
            features: planToUpdate.features.length > 0 ? planToUpdate.features : ['', '', '']
        });
        setUpdateMode(true); 
        setShowForm(true);
    };

    const handleCreatePlan = (e) => {
        e.preventDefault();
        let hasError = false;
        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (key !== 'features' && !formData[key]) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
                hasError = true;
            } else {
                newErrors[key] = '';
            }
        });

        formData.features.forEach((feature, index) => {
            if (!feature.trim()) {
                newErrors[`feature-${index}`] = `Feature ${index + 1} is required.`;
                hasError = true;
            } else {
                newErrors[`feature-${index}`] = '';
            }
        });

        setErrors(newErrors);

        if (hasError) return;

        if (updateMode) {
            dispatch(updateExistingPlan({ id: selectedPlan._id, planData: formData }))
                .then(() => {
                    toast.success('Plan updated successfully');
                    setTimeout(() => setSuccessMessage(''), 4000);
                })
                .catch(() => {
                    setErrorMessage('Failed to update plan');
                    setTimeout(() => setErrorMessage(''), 4000);
                });
            setUpdateMode(false);
        } else {
            dispatch(createNewPlan(formData))
                .then(() => {
                    toast.success('Plan created successfully');
                    setTimeout(() => setSuccessMessage(''), 4000);
                })
                .catch(() => {
                    setErrorMessage('Failed to create plan');
                    setTimeout(() => setErrorMessage(''), 4000);
                });
        }
        setShowForm(false);
        setFormData({
            name: '',
            price: '',
            description: '',
            stripePriceId: '',
            features: ['', '', '']
        });
    };

    const handleShowCreateForm = () => {
        setFormData({
            name: '',
            price: '',
            description: '',
            stripePriceId: '',
            features: ['', '', '']
        });
        setErrors({
            name: '',
            price: '',
            description: '',
            stripePriceId: '',
            features: ['', '', '']
        });
        setSelectedPlan(null);
        setUpdateMode(false);
        setShowForm(true);
    };

    return (
        <div className='flex' style={{ backgroundColor: '#f4f4f4' }}>
            <Sidebar />
            <div className='content w-full p-6'>
                <AdminNavbar className='content overflow-y-auto w-full p-6' />
                <div className="mb-8">
                    <h1 className="text-xl font-semibold mb-4">Plans</h1>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md mb-4" onClick={handleShowCreateForm}>Create New Plan</button>
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
                                {/* <div className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">{plan.description}</p>
                                </div> */}
                                    {plan.features && plan.features.map((feature, index) => (
                                        <div className="flex items-center gap-4" key={index}>
                                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">{feature}</p>
                                        </div>
                                    ))}
                            </div>

                            <div className="p-0 mt-12 flex justify-start">
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
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="modal-container relative bg-white rounded-md p-8 shadow-md" style={{ width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto' }}>
                            <h2 className="text-xl font-semibold mb-4">{updateMode ? 'Update Plan' : 'Create New Plan'}</h2>
                            <form onSubmit={handleCreatePlan}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                    {errors.price && <span className="text-red-500 text-sm">{errors.price}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                    {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Stripe Price ID</label>
                                    <input
                                        type="text"
                                        name="stripePriceId"
                                        value={formData.stripePriceId}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                    {errors.stripePriceId && <span className="text-red-500 text-sm">{errors.stripePriceId}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Features</label>
                                    {formData.features.map((feature, index) => (
                                        <div key={index} className="mb-2">
                                            <input
                                                type="text"
                                                name={`feature-${index}`}
                                                value={feature}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                            />
                                            {errors[`feature-${index}`] && <span className="text-red-500 text-sm">{errors[`feature-${index}`]}</span>}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        {updateMode ? 'Update' : 'Create'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Plan;

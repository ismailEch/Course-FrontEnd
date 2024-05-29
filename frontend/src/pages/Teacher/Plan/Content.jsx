import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';


function Content() {
    const [subscription, setSubscription] = useState(null);
    const navigate = useNavigate()

useEffect(() => {
    const token = localStorage.getItem('token_teacher');
    let teacherID; 
    if (token) {
        try {
            // Decode the token
            const decoded = jwtDecode(token);
            teacherID = decoded.id;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    } else {
        console.error('Token not found in localStorage');
    }
    if (teacherID) { 
        axios.get(`http://localhost:3000/api/subscription/teacher/plan/${teacherID}`) 
            .then(response => {
                setSubscription(response.data.subscription);
            })
            .catch(error => {
                console.error('Error fetching subscription:', error);
            });
    }
},subscription); 
const handleDeletePlan = () => {
    if (subscription) {
        axios.delete(`http://localhost:3000/api/subscription/teacher/plan/${subscription._id}`)
            .then(response => {
                localStorage.removeItem('token');
                navigate('/teacher/login')
            })
            .catch(error => {
                console.error('Error deleting plan:', error);
            });
    }
};

    if (!subscription) {
        return<div className="border-gray-300 m-auto h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
    }
    
  return (
    <div>
        <div className="w-full m-auto mt-12 p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
            <div>
                <h3 className="text-2xl font-semibold text-white jakarta sm:text-4xl">{subscription.plan.name}</h3>
            </div>
            <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20">Go {subscription.plan.name}</span>
        </div>
        <div className="mb-4 space-x-2">
            <span className="text-4xl font-bold text-white">${subscription.plan.price}</span>
        </div>
        <ul className="mb-6 space-y-2 text-indigo-100">
                        {subscription.plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span className="">{feature}</span>
                            </li>
                        ))}
        </ul>
        <a
                onClick={handleDeletePlan} // Add onClick event handler
                className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover:bg-opacity-30 md:text-base"
            >
                Delete Plan 
            </a>

        </div>
    </div>
  )
}

export default Content

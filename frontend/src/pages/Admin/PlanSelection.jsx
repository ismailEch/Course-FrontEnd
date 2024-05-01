import React, { useState, useEffect } from 'react';
import Navbar from '../../components/User/Navbar';
import  Footer  from '../../components/User/Footer';


const PlanSelection = () => {
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/plan') 
            .then(response => response.json())
            .then(data => {
                setPlans(data.Plan); // Extract the plans array from the data object
            })
            .catch(error => console.error('Error fetching plans:', error));
    }, []);

    const handlePlanSelection = (planId) => {
        setSelectedPlan(planId);
    };

    const redirectToCheckout = async (planId) => {
        try {
            const id_teacher = localStorage.getItem('id_teacher');
            const response = await fetch('http://localhost:3000/api/teacherPayment/create-subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ plan_id: planId, id_teacher: id_teacher })
            });
            const data = await response.json();
            
            window.location.href = `${data.sessionId}`;
        } catch (error) {
            console.error('Error creating subscription:', error);
            alert('Error creating subscription. Please try again later.');
        }
    };
    

    return (
        <div className='' style={{ backgroundColor: '#2C1F4A' }}>
        {/* navbar */}
        <Navbar />
        {/* end navbar*/}
        {/* content  */}
        <div className="flex justify-center">
            <div className="w-11/12 rounded-3xl bg-slate-300">
                <div>
                    <h2 className="text-xl font-bold tracki text-center mt-2 sm:text-5xl" style={{ color: '#181059' }}>The Right Plan for Your Business</h2>
                </div>
                <div className="mt-8 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 ">
                    {plans.map(plan => (
                    <div key={plan._id} className="relative h-5/6 p-8 mb-4 border border-violet-400 rounded-2xl shadow-sm flex flex-col w-full md:h-auto md:w-auto" style={{ backgroundColor: '#181059' }}>
                        <div className="flex-1">
                            <h3 className="text-2xl text-center font-semibold text-slate-50">{plan.name}</h3>
                            <p className="mt-6 text-slate-50">You just want to discover</p>
                            <ul role="list" className="mt-6 space-y-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-emerald-500" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="ml-3 text-slate-50">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 flex items-baseline ">
                            <span className="text-3xl text-slate-50 font-extrabold tracking-tight">$ {plan.price}</span><span className="ml-1 text-xl text-slate-50 font-semibold">/month</span>
                            </p>
                        </div>
                        <button style={{ backgroundColor: '#8645FF' }} className="text-white hover:bg-emerald-600 mt-8 block w-full md:w-1/2 py-3 px-6 border border-transparent rounded-md text-center font-medium" onClick={() => redirectToCheckout(plan._id)}>
                            Select Plan
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* end content */}
        {/* start footer */}
        <Footer />
        {/* end footer */}
        </div>
    );

};

export default PlanSelection;








































import React from 'react';
import { useState } from 'react';
import { registerUser } from '../../../slice/Admin/register';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  Navbarr  from '../../../components/Navbarr'

const User = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        FirstName: firstName,
        LastName: lastName,
        email: email,
        password: password,
    };
    try {
        const response = await dispatch(registerUser(data));
        console.log(response);
        if (response.payload.status === 201) {
            navigate('/login');
        }
      } catch (error) {
        console.error('Error:', error);
      }

    
};

  return (
   <div className='bg-indigo-900'>
    <Navbarr />
   <div className="flex justify-center items-center h-screen bg-indigo-900">
    <div className="flex justify-center items-center h-4/6 w-3/6 bg-indigo-100">
      <div className="max-w-md mx-auto ">
        {error && (
          <div className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
            <svg viewBox="0 0 24 24" className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3">
              <path fill="currentColor"
                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z">
              </path>
            </svg>
            <span className="text-red-800"> {error} </span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-1/2 border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-1/2 border border-gray-300 rounded-md p-2"
            />
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   </div>
   </div>
  );
};

export default User;

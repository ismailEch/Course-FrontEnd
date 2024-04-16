import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../slice/Admin/login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loading = useSelector((state) => state.user.loading);
  useEffect(()=>{
    document.title = "Login";
  }
    ,[] )
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation: Check if email is empty
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    // Validation: Check if password is empty
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }
    const data = {
        email: email,
        password: password,
    };
    try {
      const response = await dispatch(loginUser(data));
      console.log(response);
      if (response.payload.status === 'Seccuss') {
          navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
    }
};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
      
        <form onSubmit={handleSubmit} className="space-y-4">   
          <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border border-gray-300 rounded-md p-2"
          />
          {emailError && <span className="text-red-600">{emailError}</span>}
          </div> 

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
            />
            {passwordError && <span className="text-red-600">{passwordError}</span>}
          </div>        
          
          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

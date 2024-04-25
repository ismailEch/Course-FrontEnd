import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../slice/Admin/register';
import RegisterImg from '../../../../public/assets/register.svg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/User/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirmation password
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (firstName.trim().length < 5) {
      errors.firstName = 'First Name must be at least 5 characters long';
    }
    if (lastName.trim().length < 5) {
      errors.lastName = 'Last Name must be at least 5 characters long';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword.trim()) { // Check if confirmation password is empty
      errors.confirmPassword = 'Confirmation password is required';
    } else if (password !== confirmPassword) { // Check if password matches confirmation password
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    // Submit if no errors
    if (Object.keys(errors).length === 0) {
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
        } else if (response.payload.message === 'Email already exists') {
          toast.warning(response.payload.message);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div  style={{ backgroundColor: '#2C1F4A' }}>
      <Navbar />
      <div className="form-content text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-9/12  xl:w-5/12 p-4 sm:p-12">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl text-start font-extrabold">Register Yourself</h1>
              <p className='text-sm'>Begin your journey with us today</p>
              <div className="w-full flex-1 mt-2">
                <div className="my-4 border-b text-center"></div>
                <form onSubmit={handleSubmit}>
                  <div className="mx-auto max-w-xs">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </span>
                      <input 
                        className={`w-full px-8 py-4 pl-10 mb-2 rounded-lg font-medium bg-gray-100 border ${errors.firstName ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          if (e.target.value.trim() !== '') {
                            setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
                          }
                        }}
                      />
                    </div>
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    
                    {/* Last Name */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </span>
                      <input 
                        className={`w-full px-8 py-4 pl-10 mb-2 rounded-lg font-medium bg-gray-100 border ${errors.lastName ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          if (e.target.value.trim() !== '') {
                            setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
                          }
                        }}
                      />
                    </div>
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    
                    {/* Email */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </span>
                      <input 
                        className={`w-full px-8 py-4 pl-10 mb-2 rounded-lg font-medium bg-gray-100 border ${errors.email ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (e.target.value.trim() !== '') {
                            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
                          }
                        }}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    
                    {/* Password */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </span>
                      <input 
                        className={`w-full px-8 py-4 pl-10 mb-2 rounded-lg font-medium bg-gray-100 border ${errors.password ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          if (e.target.value.trim() !== '') {
                            setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
                          }
                        }}
                      />
                    </div>
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    
                    {/* Confirm Password */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                      </span>
                      <input 
                        className={`w-full px-8 py-4 pl-10 mb-2 rounded-lg font-medium bg-gray-100 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                          if (e.target.value.trim() !== '') {
                            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' }));
                          }
                        }}
                      />
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span className="ml-3">Sign Up</span>
                    </button>
                    
                    <p className="mt-6 text-xs text-gray-600 text-center">
                      already have an account
                      <a href="#" className="border-b border-gray-500 border-dotted">Login Now</a>
                    </p>
                  </div>
                </form>

              </div>
            </div>
          </div>
          <div className="flex-1 w-2 bg-indigo-100 text-center hidden lg:flex" style={{ backgroundColor: '#090446' }}>
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

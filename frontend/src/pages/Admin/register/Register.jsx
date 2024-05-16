import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../slice/Admin/register';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/User/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../../components/User/Footer';
import loginPic from '../../../../public/assets/login.svg'

const User = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(''); 
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (firstName.trim().length < 5) {
      errors.firstName = 'First Name require';
    }
    if (lastName.trim().length < 5) {
      errors.lastName = 'Last Name require';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(phone)) {
      errors.phone = 'Phone number must contain only numbers';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    setErrors(errors);

    // Submit if no errors
    if (Object.keys(errors).length === 0) {
      const data = {
        FirstName: firstName,
        LastName: lastName,
        email: email,
        password: password,
        phone: phone, 
      };
      try {
        const response = await dispatch(registerUser(data));
        console.log(response);
        if (response.payload.status === 201) {
          navigate('/user/login');
        } else if (response.payload.message === 'Email already exists') {
          toast.warning(response.payload.message);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className='' style={{ backgroundColor: '#2C1F4A' }}>
      <Navbar />
      <div className="py-16 mt-20">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url(${loginPic})` }}></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl text-gray-900 text-center">Register Yourself!</h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a href="#" className="text-xs text-center text-gray-500 uppercase">Create your account</a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex">
                <div className="mt-2 mr-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                  <input
                    placeholder='First Name'
                    style={{ backgroundColor: '#7F56D9' }}
                    className="text-slate-50 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none placeholder-slate-50 rounded-xl"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                <div className="mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                  <input
                    style={{ backgroundColor: '#7F56D9' }}
                    placeholder='Last Name'
                    className="bg-gray-200 text-slate-50 focus:outline-none focus:shadow-outline border border-gray-300  py-2 px-4 block w-full appearance-none placeholder-slate-50 rounded-xl"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                  style={{ backgroundColor: '#7F56D9' }}
                  placeholder='Email'
                  className="bg-gray-200 text-slate-50  focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none placeholder-slate-50 rounded-xl"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input
                  style={{ backgroundColor: '#7F56D9' }}
                  placeholder='Phone Number'
                  className="bg-gray-200 text-slate-50  focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none placeholder-slate-50 rounded-xl"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  style={{ backgroundColor: '#7F56D9' }}
                  className="bg-gray-200 text-slate-50 focus:outline-none focus:shadow-outline border border-gray-300 py-2 px-4 block w-full appearance-none placeholder-slate-50 rounded-xl"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="mt-4">
                <button type="submit" style={{ backgroundColor: '#5426BB' }} className="text-white font-bold py-2 px-4 w-1/4 rounded hover:bg-gray-600">Register</button>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to={"/user/login"} className="text-xs text-gray-500 uppercase">or sign up</Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;

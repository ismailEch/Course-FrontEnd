import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom'; 

import profile from '../../../assets/profil1.svg';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
        setUserData(response.data.User);
        setUpdatedUserData(response.data.User);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({
      ...updatedUserData,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      const token = localStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const response = await axios.patch(
        `http://localhost:3000/api/user/${userId}`,
        updatedUserData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setUserData(response.data.Update);
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full overflow-hidden dark:bg-gray-900">
      <div className="flex flex-col mt-24">
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
          <img
            src={profile}
            alt="User Profile"
            className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
          />
          <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
            {userData.name}
          </h1>

        </div>
        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
          <p className="w-fit text-gray-700 dark:text-gray-400 text-md">{userData.bio}</p>
          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">First Name</dt>
                    {!editMode ? (
                      <dd className="text-lg font-semibold">{userData.FirstName}</dd>
                    ) : (
                      <input
                        type="text"
                        name="FirstName"
                        value={updatedUserData.FirstName}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    )}
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Last Name</dt>
                    {!editMode ? (
                      <dd className="text-lg font-semibold">{userData.LastName}</dd>
                    ) : (
                      <input
                        type="text"
                        name="LastName"
                        value={updatedUserData.LastName}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    )}
                  </div>
                </dl>
              </div>
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number</dt>
                    {!editMode ? (
                      <dd className="text-lg font-semibold">{userData.phone}</dd>
                    ) : (
                      <input
                        type="text"
                        name="phone"
                        value={updatedUserData.phone}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    )}
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email</dt>
                    {!editMode ? (
                      <dd className="text-lg font-semibold">{userData.email}</dd>
                    ) : (
                      <input
                        type="email"
                        name="email"
                        value={updatedUserData.email}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      />
                    )}
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {editMode && (
            <div className="w-full flex justify-end gap-4 mb-4">
              <button onClick={handleSaveClick} className="bg-primary text-white px-4 py-2 rounded-md">
                Save
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-md" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </div>
          )}
          {/* <div className="fixed bg-primary bottom-20 flex flex-col rounded-sm text-white dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400"> */}
            <div className='flex justify-center gap-4'>
                {!editMode && (
                    <button className="p-2 bg-primary text-white" onClick={handleEditClick}>
                    Edit
                    </button>
                )}
                <Link to="/">
                    <button className="p-2 bg-primary text-white">Back to Home</button>
                </Link>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Profile;

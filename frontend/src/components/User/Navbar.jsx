// import React from 'react';
// import logo from '../../assets/logo.svg';
// import { SlBasket } from "react-icons/sl";
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
    
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('role');
//         navigate('/login');
//     };

// return (
//     <nav className="flex items-center justify-between px-4 py-2 bg-primary">
//         <div className="flex items-center">
//         <a href="/" className="text-xl font-bold text-white flex items-center pr-5 hover: ">  
//             <img src={logo} alt="" className="w-auto h-24" />  
//         </a>
//         </div>
//         <ul className="hidden md:flex space-x-4 list-none text-white">
//             <li>
//             <a  className="hover:text-opacity-75">Home</a>
//             </li>
//             <li>
//             <a  className="hover:text-opacity-75">About</a>
//             </li>
//             <li>
//             <a  className="hover:text-opacity-75">Courses</a>
//             </li>
//             <li>
//             <a  className="hover:text-opacity-75">Contact</a>
//             </li>
//         </ul>
        
//         <div className="flex items-center space-x-2  ml-[350px] "> {/* Buttons */}
//         <button className="px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400 ">Get Started</button>
//         <button className="px-3 py-2 rounded-md  text-white bg-secondary hover:bg-purple-400  ">Login</button>
//         </div>
//         <SlBasket className="w-6 h-6 text-white mr-10 " />
//     </nav>
//     );
// };

// export default Navbar;












import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import logo from '../../assets/Logo (2).svg';
import { IoMdMenu } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MdLibraryBooks } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Courses", path: "/courses" },
    { link: "Blog", path: "/blog" },
    { link: "Contact", path: "/contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleProfileClick = async () => {
    if (token) {
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      try {
        const response = await fetch(`http://localhost:3000/api/user/${userId}`);
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('userProfile', JSON.stringify(data.User));
          navigate('/profile');
        } else {
          console.error('Failed to fetch user profile:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (showMenu) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <nav className="flex sm:w-full items-center justify-between py-2 bg-primary shadow-md fixed top-0 w-full z-50 backdrop-blur-sm bg-opacity-70">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold text-white flex items-center pr-5">
          <img src={logo} alt="" className="w-auto h-20" />
        </a>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <IoMdMenu className="w-8 h-8" />
        </button>
      </div>
      <div className="hidden md:flex gap-10">
        <ul className="flex space-x-4 list-none text-white">
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <Link to={path} className="hover:text-opacity-75 mr-6">{link}</Link>
            </li>
          ))}
        </ul>
      </div>

      {token ? (
        <div className="flex items-center space-x-2 mr-12 relative">
          <BiSolidUserCircle className='w-10 h-10 text-secondary cursor-pointer' onClick={toggleDropdown} />
          <SlBasket className="w-6 h-6 text-white cursor-pointer" />
          {showDropdown && (
            <div className="absolute right-0 mt-40 w-48 bg-white shadow-lg rounded-lg z-10">
              <ul>
                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => console.log('My Courses')}>
                  <MdLibraryBooks className="mr-2" /> My Courses
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleProfileClick}>
                  <FaUserCog className="mr-2" /> Profile
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
                  <IoIosLogOut className="mr-2" /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-2 mr-12">
          <Link to={'/register/option'} className="hidden md:block px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Get Started</Link>
          <Link to={'/login/option'} className="hidden md:block px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Login</Link>
        </div>
      )}

      <div className={`md:hidden fixed top-20 right-0 w-full h-full bg-primary text-white transition duration-300 ease-in-out z-20 ${showMenu ? 'visible' : 'invisible'}`}>
        <ul className="flex flex-col items-start p-4 space-y-4">
          {navItems.map(({ link, path }) => (
            <li key={link}>
              <Link to={path} className="hover:text-opacity-75">{link}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-start p-4 space-y-4 mr-12">
          <button className="px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Get Started</button>
          <button className="px-3 py-2 rounded-md text-white bg-secondary hover:bg-purple-400">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


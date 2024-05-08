import logo from '../../../public/assets/Logo (2).svg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
                {/* Left part with logo and paragraph */}
                <div className="mb-10 md:mb-0 ">
                <img src={logo} alt="Logo" className="h-20 mb-0" />
                <p className="text-sm text-stone-400 mb-2">Elevate your skills with our programming courses.<br/>and grow with ease on our user-friendly platform.</p>
                <div>
                <div className="flex items-center">
                    <a href="#" className="text-sm mr-4"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-sm mr-4"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-sm mr-4"><i className="fab fa-instagram"></i></a>
                </div>
                    <div className='flex'>
                    <FaFacebook className="w-6 h-6 text-white mr-4 " />
                    <FaLinkedin className="w-6 h-6 text-white mr-4 " />
                    <FaInstagramSquare className="w-6 h-6 text-white mr-10 " />
                    </div>
                </div>
                </div>
            
                {/* Middle part with quick links */}
                <div className="mb-2 md:mb-4 gap-10">
                <h2 className="text-sm text-slate-50 font-bold mb-2">Quick Links</h2>
                <ul className='flex gap-16'>
                    <div>
                    <li><a className='text-stone-400' href="home">Home</a></li>
                    <li><a className='text-stone-400' href="courses">Courses</a></li>
                    <li><a className='text-stone-400' href="contact">Contact</a></li>
                    </div>
                    <div>
                    <li><a className='text-stone-400' href="about">About</a></li>
                    <li><a className='text-stone-400' href="blog">Blog</a></li>
                    </div>
                </ul>
                </div>
                
                
                
                {/* Right part with contact information */}
                <div>
                <h2 className="text-sm mr-20 text-slate-50 font-bold mb-10">Contact Us</h2>
                <p className="text-sm text-stone-400">Phone: +1234567890</p>
                <p className="text-sm text-stone-400">Email: academia@contact.com</p>
                </div>
            </div>
            
            {/* Horizontal line */}
            <div className="border-t border-gray-300 my-4"></div>
            
            {/* Copyright text */}
            <div className="text-sm flex justify-start">
                &copy; 2024 Academia. All rights reserved.
            </div>
            </div>
        </footer>
    );
};
export default Footer;
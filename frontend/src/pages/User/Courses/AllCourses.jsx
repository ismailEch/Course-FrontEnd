import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../components/User/Navbar';
import Footer from '../../../components/User/Footer';

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ price: '', language: '', level: '', category: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 8;

    useEffect(() => {
        // Fetch courses from API
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/course/all');
                if (Array.isArray(response.data.courses)) {
                    setCourses(response.data.courses);
                    setFilteredCourses(response.data.courses);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching courses: ", error);
            }
        };

        // Fetch categories from API
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/category');
                if (response.data.status === 'success' && Array.isArray(response.data.categories)) {
                    setCategories(response.data.categories);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };

        fetchCourses();
        fetchCategories();
    }, []);

    const handleFilter = () => {
        let filtered = courses.filter(course => {
            const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPrice = filters.price === '' || course.price === filters.price;
            const matchesLanguage = filters.language === '' || course.language.toLowerCase() === filters.language.toLowerCase();
            const matchesLevel = filters.level === '' || course.level.toLowerCase() === filters.level.toLowerCase();
            const matchesCategory = filters.category === '' || course.category.toLowerCase() === filters.category.toLowerCase();
            return matchesSearch && matchesPrice && matchesLanguage && matchesLevel && matchesCategory;
        });
        setFilteredCourses(filtered);
        setCurrentPage(1); // Reset to first page after filtering
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the courses to be displayed based on the current page
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = Array.isArray(filteredCourses) ? filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse) : [];

    // Calculate total pages
    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    return (
        <div>
            <Navbar />
            <div className="bg-primary text-primary py-20 mt-8">
                <div className="max-w-7xl mx-auto px-4 w-11/12">
                    <div className="flex gap-2 mb-6">
                        <input
                            type="text"
                            placeholder="Search Courses"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border-gray-300 border rounded-md px-3 py-2 mr-4"
                        />
                        <button className="bg-purple-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition duration-300" onClick={handleFilter}>Search</button>
                    </div>
                    <div className="flex gap-2 mb-6">
                        <select
                            value={filters.language}
                            onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                            className="bg-purple-600 text-white px-4 py-2 rounded-md"
                        >
                            <option value="">Language</option>
                            <option value="arabic">English</option>
                            <option value="arabic">Spanish</option>
                            <option value="arabic">Chinese</option>
                            <option value="arabic">Hindi</option>
                            <option value="arabic">Arabic</option>
                            <option value="arabic">French</option>
                            <option value="indian">Portuguese</option>
                        </select>
                        <select
                            value={filters.level}
                            onChange={(e) => setFilters({ ...filters, level: e.target.value })}
                            className="bg-purple-600 text-white px-4 py-2 rounded-md"
                        >
                            <option value="">Level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="all_levels">All Levels</option>
                        </select>
                        <select
                            value={filters.category}
                            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                            className="bg-purple-600 text-white px-4 py-2 rounded-md"
                        >
                            <option value="">Category</option>
                            {categories.map(category => (
                                <option key={category._id} value={category.name.toLowerCase()}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                        {currentCourses.map(course => (
                            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={course.cover} alt={course.name} className="w-full h-36 object-cover" />
                                <div className="px-4 py-4">
                                    <p className="text-lg font-semibold text-gray-800 mb-2">{course.name}</p>
                                    <div className="flex items-center mb-2">
                                        <img src={course.teacherImage} alt={course.teacherName} className="w-8 h-8 rounded-full mr-2" />
                                        <p className="text-sm text-gray-700">{course.teacherName}</p>
                                    </div>
                                    <p className="text-gray-700 mb-2">{course.description}</p>
                                    <p className="text-gray-700">{course.hours} Hours</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.293 14.707a1 1 0 01-1.414 0L6.586 10.414a1 1 0 010-1.414l4.293-4.293a1 1 0 111.414 1.414L9.414 10l3.879 3.879a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {[...Array(totalPages).keys()].map(number => (
                                <button
                                    key={number + 1}
                                    onClick={() => handlePageChange(number + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === number + 1 ? 'bg-purple-600 text-violet-500' : ''}`}
                                >
                                    {number + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                            >
                                <span className="sr-only">Next</span>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L11.293 10 7.707 6.293a1 1 0 111.414-1.414l4.293 4.293a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllCourses;

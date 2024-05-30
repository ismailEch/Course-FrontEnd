import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';

function CreateContent() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token_teacher');
    let instructorId; 
    if (token) {
        try {
            // Decode the token
            const decoded = jwtDecode(token);
            instructorId = decoded.id;
        } catch (error) {
            console.error('Error decoding token:', error);
        }
    } else {
        console.error('Token not found in localStorage');
    }

    const [courseDetails, setCourseDetails] = useState({
        title: '',
        description: '',
        language: '',
        level: '',
        price: '',
        cover: null,
        Category: ''
    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the API
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/category');
                if (response.data.status === 'success') {
                    setCategories(response.data.categories);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching categories: ", error);
            }
        };

        fetchCategories();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setCourseDetails((prev) => ({ ...prev, cover: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', courseDetails.title);
            formData.append('description', courseDetails.description);
            formData.append('language', courseDetails.language);
            formData.append('level', courseDetails.level);
            formData.append('price', courseDetails.price);
            formData.append('cover', courseDetails.cover);
            formData.append('instructor', instructorId);
            formData.append('Category', courseDetails.Category);

            const response = await axios.post('http://localhost:3000/api/course', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            localStorage.setItem('courseID', response.data.Course._id);
            navigate("/teacher/Section/create");
            console.log('Response from server:', response.data.Course._id);
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <div className="mx-14 mt-10 border-2 bg-white rounded-lg ">
            <div className="mt-10 text-center text-secondary text-[26px] font-bold">CREATE COURSE</div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="p-8">
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            name="title"
                            value={courseDetails.title}
                            onChange={handleInputChange}
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-secondary shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                            placeholder="Course Title *"
                        />
                        <select
                            name="language"
                            value={courseDetails.language}
                            onChange={handleInputChange}
                            className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                        >
                            <option value="" disabled>Select Language</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="chinese">Chinese</option>
                            <option value="hindi">Hindi</option>
                            <option value="arabic">Arabic</option>
                            <option value="french">French</option>
                            <option value="portuguese">Portuguese</option>
                        </select>
                    </div>

                    <div className="flex gap-4">
                        <select
                            name="level"
                            value={courseDetails.level}
                            onChange={handleInputChange}
                            className="block w-1/2 rounded-md border bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                        >
                            <option value="" disabled>Select Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="all_levels">All Levels</option>
                        </select>
                        <select
                            name="Category"
                            value={courseDetails.Category}
                            onChange={handleInputChange}
                            className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        >
                            <option value="" disabled>Select Category</option>
                            {categories.map(category => (
                                <option key={category._id} value={category.name.toLowerCase()}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="my-6 flex gap-4">
                        <input
                            type="number"
                            name="price"
                            value={courseDetails.price}
                            onChange={handleInputChange}
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                            placeholder="Price *"
                        />
                        <input
                            type="file"
                            name="cover"
                            onChange={handleFileChange}
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm font-semibold text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                            placeholder="Cover *"
                        />
                    </div>
                    <div className="">
                        <textarea
                            name="description"
                            value={courseDetails.description}
                            onChange={handleInputChange}
                            className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-500"
                            placeholder="Description"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            style={{ backgroundColor: "#9563FF" }}
                            className="cursor-pointer rounded-lg px-8 py-5 text-sm font-semibold text-white"
                        > 
                            Next
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateContent;

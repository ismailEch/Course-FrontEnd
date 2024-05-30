import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LectureCreate() {
    const navigate = useNavigate();
    const [lectureDetails, setLectureDetails] = useState({
        title: '',
        duration: '',
        content: '',
        resource: null,
        sectionID: '',
    });

    const [lectures, setLectures] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        // Retrieve section information from localStorage
        const storedSections = Object.keys(localStorage)
            .filter((key) => key.startsWith('section_info'))
            .map((key) => JSON.parse(localStorage.getItem(key)));
        setSections(storedSections);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLectureDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setLectureDetails((prev) => ({ ...prev, resource: file }));
    };

    const handleAddLecture = async () => {
        try {
            // Send lecture data to the backend
            const formData = new FormData();
            formData.append('title', lectureDetails.title);
            formData.append('duration', lectureDetails.duration);
            formData.append('content', lectureDetails.content);
            formData.append('resource', lectureDetails.resource);
            formData.append('section', lectureDetails.sectionID);

            const response = await axios.post('http://localhost:3000/api/lecture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response from server:', response.data);

            // Clear inputs and reset lecture details
            setLectureDetails({
                title: '',
                duration: '',
                content: '',
                resource: null,
                sectionID: '',
            });

            // Log message to console
            console.log('tfo');
        } catch (error) {
            console.error('Error adding lecture:', error);
        }
    };

    const handleCreate = async () => {
        try {
            const formData = new FormData();
            formData.append('title', lectureDetails.title);
            formData.append('duration', lectureDetails.duration);
            formData.append('content', lectureDetails.content);
            formData.append('resource', lectureDetails.resource);
            formData.append('section', lectureDetails.sectionID);

            const response = await axios.post('http://localhost:3000/api/lecture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response from server:', response.data);

            // Clear inputs and reset lecture details
            setLectureDetails({
                title: '',
                duration: '',
                content: '',
                resource: null,
                sectionID: '',
            });

            // Clear local storage and navigate
            localStorage.removeItem('courseID');
            Object.keys(localStorage)
                .filter((key) => key.startsWith('section_info'))
                .forEach((key) => localStorage.removeItem(key));
            navigate("/teacher/courses/create");

            // Log message to console
            console.log('akkskskhona');
        } catch (error) {
            console.error('Error creating lectures:', error);
        }
    };

    return (
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
            <div className="mt-10 text-center font-bold">Create Lecture</div>
            <div className="p-8">
                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        name="title"
                        value={lectureDetails.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                        placeholder="Lecture Title *"
                    />
                    <input
                        type="text"
                        name="duration"
                        value={lectureDetails.duration}
                        onChange={handleInputChange}
                        className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                        placeholder="Lecture Duration"
                    />
                </div>

                <div className="flex gap-4 mb-4">
                    <textarea
                        name="content"
                        value={lectureDetails.content}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                        placeholder="Lecture Content *"
                    ></textarea>
                </div>

                <div className="flex gap-4 mb-4">
                    <input
                        type="file"
                        name="resource"
                        onChange={handleFileChange}
                        className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm font-semibold text-gray-500 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                        placeholder="Lecture Resource *"
                    />

                    <select
                        name="sectionID"
                        value={lectureDetails.sectionID}
                        onChange={handleInputChange}
                        className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary sm:text-sm"
                    >
                        <option value="">Select Section</option>
                        {sections.map((section) => (
                            <option key={section.sectionID} value={section.sectionID}>
                                {section.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="text-center mt-4">
                    <button
                        onClick={handleAddLecture}
                        className="cursor-pointer rounded-lg px-8 py-5 text-sm font-semibold text-white"
                        style={{ backgroundColor: "#4CAF50" }}
                        type="button"
                    >
                        Add Lecture
                    </button>
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={handleCreate}
                        style={{ backgroundColor: "#9563FF" }}
                        className="cursor-pointer rounded-lg px-8 py-5 text-sm font-semibold text-white"
                        type="button"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LectureCreate;
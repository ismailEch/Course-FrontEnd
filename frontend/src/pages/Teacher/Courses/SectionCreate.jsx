import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SectionCreate() {
    const navigate = useNavigate()
    const [sections, setSections] = useState([{ title: '' }]);
    const course = localStorage.getItem('courseID') || '';

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSections = [...sections];
        updatedSections[index][name] = value;
        setSections(updatedSections);
    };

    const addSection = () => {
        setSections([...sections, { title: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sectionData = await Promise.all(
                sections.map(async (section, index) => {
                    const response = await axios.post('http://localhost:3000/api/section', {
                        title: section.title,
                        course: course,
                    });
                    console.log('Response from server:', response.data);
                    return response.data.Section; // Return section data from server response
                })
            );
            // Save section _id and title to localStorage for each section
            sectionData.forEach((section, index) => {
                localStorage.setItem(`section_info_${index}`, JSON.stringify({ title: section.title, sectionID: section._id }));
            });
            navigate("/teacher/Lecture/create");
        } catch (error) {
            console.error('Error creating section:', error);
        }
    };
    

    return (
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
            <div className="mt-10 text-center font-bold">Create Sections</div>
            <form onSubmit={handleSubmit}>
                <div className="p-8">
                    {sections.map((section, index) => (
                        <div key={index} className="flex gap-4 mb-4">
                            <input
                                type="text"
                                name="title"
                                value={section.title}
                                onChange={(e) => handleInputChange(index, e)}
                                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder={`Section Title ${index + 1} *`}
                            />
                        </div>
                    ))}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={addSection}
                            style={{ backgroundColor: "#9563FF" }}
                            className="cursor-pointer rounded-lg px-8 py-5 text-sm font-semibold text-white"
                        >
                            Add Section
                        </button>
                        <button
                            type="submit"
                            style={{ backgroundColor: "#9563FF" }}
                            className="cursor-pointer rounded-lg px-8 py-5 text-sm font-semibold text-white"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SectionCreate;

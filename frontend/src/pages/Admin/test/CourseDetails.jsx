import React from 'react';

function CourseDetails({ selectedCourse, onClose }) {
    if (!selectedCourse || !selectedCourse.sections) {
        return null; // Return null if selectedCourse or sections is null
    }

    return (
        <div>
            <h2>{selectedCourse.title}</h2>
            <p>Language: {selectedCourse.language}</p>
            <p>Category: {selectedCourse.Category}</p>
            <p>Price: {selectedCourse.price}</p>
            <p>Valid: {selectedCourse.valid}</p>
            <button onClick={onClose}>Close</button>

            <h3>Sections:</h3>
            {selectedCourse.sections.map(section => (
                <div key={section._id}>
                    <h4>{section.title}</h4>
                    <ul>
                        {section.lectures && section.lectures.map(lecture => ( // Add null check here
                            <li key={lecture._id}>
                                <p>{lecture.title}</p>
                                <p>{lecture.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default CourseDetails;

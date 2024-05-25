import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    courseInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        backgroundColor: '#f8f8f8',
        padding: '20px',
        borderRadius: '8px',
    },
    courseDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    courseImage: {
        width: '300px',
        marginRight: '20px',
        borderRadius: '8px',
    },
    courseTitle: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    courseSubtitle: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    courseDetail: {
        marginBottom: '10px',
    },
    addButton: {
        padding: '10px 20px',
        backgroundColor: '#9563FF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    sectionTitle: {
        marginBottom: '10px',
    },
    lectureItem: {
        padding: '5px 0',
        borderBottom: '1px solid #ddd',
    },
    lectureList: {
        listStyle: 'none',
        paddingLeft: '0',
    },
    priceSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    price: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
};

function OneCourse() {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/course/detail/${courseId}`)
            .then(response => {
                console.log(response)
                const { sections, lectures } = response.data;
                if (sections.length > 0) {
                    setCourse(sections[0].course);
                }
                const sectionsMap = {};
                lectures.forEach(lecture => {
                    const sectionTitle = lecture.section.title;
                    if (!sectionsMap[sectionTitle]) {
                        sectionsMap[sectionTitle] = [];
                    }
                    sectionsMap[sectionTitle].push(lecture);
                });
                const sectionsArray = Object.entries(sectionsMap).map(([title, lectures]) => ({
                    title,
                    lectures
                }));
                setSections(sectionsArray);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [courseId]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

    return (
        <div style={styles.container}>
            {course && (
                <div className="course-info" style={styles.courseInfo}>
                    <div style={styles.courseDetails}>
                        <div>
                            <h1 style={styles.courseTitle}>{course.title}</h1>
                            {/* <p style={styles.courseSubtitle}>Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</p> */}
                            <div style={styles.courseDetail}>
                                <span style={{ backgroundColor: '#ffe599', padding: '5px 10px', borderRadius: '5px', marginRight: '10px' }}>Bestseller</span>
                                <span>4.7 <span style={{ color: '#f39c12' }}>★★★★★</span> (297,654 ratings) 1,280,941 students</span>
                            </div>
                            <p style={styles.courseDetail}><strong>Created by </strong><a href="#">Dr. Angela Yu</a></p>
                            <p style={styles.courseDetail}><strong>Last updated </strong>5/2024</p>
                            <p style={styles.courseDetail}><strong>Language: </strong>{course.language}</p>
                            <p style={styles.courseDetail}><strong>Level: </strong>{course.level}</p>
                        </div>
                    </div>
                    <div style={styles.priceSection}>
                        <img src={course.cover} alt={course.title} style={styles.courseImage} />
                        <div style={styles.price}>${course.price}</div>
                        <button style={styles.addButton}>Add to cart</button>
                        <button style={{ ...styles.addButton, backgroundColor: '#4CAF50', marginTop: '10px' }}>Buy now</button>
                    </div>
                </div>
            )}
            <div className="sections">
                <h2 style={styles.sectionTitle}>Course Content</h2>
                {sections.map((section, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>{section.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul style={styles.lectureList}>
                                {section.lectures.map((lecture) => (
                                    <li key={lecture._id} style={styles.lectureItem}>
                                        {lecture.title}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default OneCourse;

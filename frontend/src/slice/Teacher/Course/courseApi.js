import axios from 'axios';
export const fetchCoursesByInstructorId = (teacherID) => {
    return axios.get(`http://localhost:3000/api/course/${teacherID}`);
};

export const fetchAllCourses = () => {
    return axios.get(`http://localhost:3000/api/course/all}`);
};

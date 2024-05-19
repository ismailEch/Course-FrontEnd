import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/course';



export const fetchAllCourses = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};


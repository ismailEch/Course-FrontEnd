import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/teacher';

export const fetchAllTeachers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const deleteTeacher = async (teacherId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${teacherId}`);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

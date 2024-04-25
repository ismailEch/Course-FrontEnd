// userApi.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/user';

export const fetchAllUsers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/category';

// {Array.isArray(categories ) && categories.map((category) => (


export const fetchAllCategories = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const createCategory = async (CategoryData) => {
  try {
    const response = await axios.post(BASE_URL, CategoryData,);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateCategory = async (CategoryId, CategoryData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${CategoryId}`, CategoryData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const deleteCategory = async (CategoryId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${CategoryId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
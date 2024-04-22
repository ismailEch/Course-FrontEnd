import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/plan';




export const fetchAllPlans = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const createPlan = async (planData) => {
  try {
    const response = await axios.post(BASE_URL, planData,);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updatePlan = async (planId, planData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${planId}`, planData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const deletePlan = async (planId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${planId}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
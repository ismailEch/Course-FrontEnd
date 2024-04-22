import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as planAPI from './planApi';

export const fetchData = createAsyncThunk('plans/getplan', async () => {
  return await planAPI.fetchAllPlans();
});

export const createNewPlan = createAsyncThunk(
    'plans/createNewPlan',
    async (planData) => {
        return await planAPI.createPlan(planData);
    }
);
export const updateExistingPlan = createAsyncThunk('categories/updateExistingPlan', async ({ id, planData }) => {
    return await planAPI.updatePlan(id, planData);
});

export const removePlan = createAsyncThunk(
    'plans/removePlan',
    async (planId) => {
        return await planAPI.deletePlan(planId);
    }
);

const planSlice = createSlice({
    name: 'plans',
    initialState: {
    plans: [],
    loading: false,
    error: null,
    // message:null,
    },
    reducers: {
    addPlan(state, action) {
        state.plans.push(action.payload);
    },
},
extraReducers: (builder) => {
    builder
        .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload.Plan;
        })
        .addCase(fetchData.pending, (state) => {
        state.loading = true;
        })
        .addCase(createNewPlan.fulfilled, (state, action) => {
        state.plans.push(action.payload); 
        })
        .addCase(updateExistingPlan.fulfilled, (state, action) => {
            const { _id, ...updatedPlan } = action.payload;
            const existingPlanIndex = state.plans.findIndex((plan) => plan._id === _id);
            if (existingPlanIndex !== -1) {
                state.plans[existingPlanIndex] = { _id, ...updatedPlan };
            }
        })
        .addCase(removePlan.fulfilled, (state, action) => {
            console.log(action.payload);
            state.plans = state.plans.filter((plan) => plan._id !== action.payload._id);
            // state.message = action.payload.message
        });
    },
});

export const { addPlan } = planSlice.actions;
export default planSlice.reducer;

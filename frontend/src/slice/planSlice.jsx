// planSlice.js
import { createSlice } from '@reduxjs/toolkit';

const planSlice = createSlice({
    name: 'plans',
    initialState: {
    plans: []
},
reducers: {
    getPlan: (state, action) => {
        state.plans = action.payload.map(plan =>{
            return {id:plan._id , name:plan.name ,price:plan.price  }
        })
    }
}
});

export const { getPlan } = planSlice.actions;
export default planSlice.reducer;

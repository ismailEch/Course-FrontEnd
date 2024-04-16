// planSlice.js
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchData = createAsyncThunk ('plans/getplan' ,async() =>{
    try {
        const res = await axios.get('http://localhost:3000/api/plan')
        console.log('data: ' , res.data.Plan);
        return res.data;
    } catch (error) {
        console.log('error:' , error);
    }
} ) 





const planSlice = createSlice({
    name: 'plans',
    initialState: {
        plans: [],
        loading: false,
        error: null
    },


reducers: {
},
extraReducers : builder =>{
    builder.addCase(fetchData.fulfilled,(state,action)=>{
        state.loading= false
        state.plans = action.payload.Plan    })
        .addCase(fetchData.pending , (state) =>{
            state.loading = true
        } ) 
        // .addCase(fetchData.rejected , (state,action)=>{
        // state.loading = false 
        // state.error = action.payload.message})
}
});

export const { getPlan } = planSlice.actions;
export default planSlice.reducer;

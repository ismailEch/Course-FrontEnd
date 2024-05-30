// planSlice.js
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchData = createAsyncThunk ('users/getallusers' ,async() =>{
    try {
        const res = await axios.get('http://localhost:3000/api/user')
        console.log(res.data.Users);

        return res.data.Users;
    } catch (error) {
        console.log('error:' , error);
    }
} ) 





const userInfoSlice = createSlice({
    name: 'usersInfo',
    initialState: {
        users: [],
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
        .addCase(fetchData.rejected , (state,action)=>{
        state.loading = false 
        state.error = action.payload.message})
}
});

export const {  } = userInfoSlice.actions;
export default userInfoSlice.reducer;

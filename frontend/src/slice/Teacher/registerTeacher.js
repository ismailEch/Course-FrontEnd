import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    error:null,
    teacher: {},
    FirstName : '',
    LastName : '',
    email : '',
    phone: '',
    password: '',
}

export const registerTeacher = createAsyncThunk('teacher/registerTeacher', async (formdata , {rejectWithValue})=>{
    try {
        console.log(formdata)
        const response = await axios.post('http://localhost:3000/api/authTeacher/signup', formdata)
        console.log(response.data);
        return(response)
    } catch (error) {
        return rejectWithValue(error.response.data);

    }

})

export const teacherSlice = createSlice({
        name: 'registerTeacher',
        initialState,
        reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(registerTeacher.pending , (state)=>{
            state.loading= true
        })
        .addCase(registerTeacher.fulfilled,(state, action)=>{
            state.loading= false,
            state.user = action.payload
        })
        .addCase(registerTeacher.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.payload.message;
        });
    }
})


export default teacherSlice.reducer
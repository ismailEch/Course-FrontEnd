import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'
import { saveToken, saveUserRole, clearToken, clearUserRole } from '../../utils/auth'
const initialState = {
    loading: false,
    error:null,
    user: {},
    token: null,
    message : '',
    email : '',
    password: ''
}

export const loginTeacher = createAsyncThunk('user/loginTeacher', async (formdata , {rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:3000/api/authTeacher/login', formdata)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id_teacher', response.data.teacher_id);
        saveToken(response.data.token);
        return { data :response.data, token: response.data.token};
    } catch (error) {
        return rejectWithValue(error.response.data);

    }
})

export const teacherLoginSlice = createSlice({
        name: 'teacherlogin',
        initialState: {
        },
        reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(loginTeacher.pending , (state)=>{
            state.loading= true
        })
        .addCase(loginTeacher.fulfilled,(state, action)=>{
            state.loading= false,
            state.user = action.payload
            state.message = action.payload.message
        })
        .addCase(loginTeacher.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.payload ? action.payload.message : 'An error occurred'; // Check if payload exists before accessing message
        });
        
    }
})


export default teacherLoginSlice.reducer
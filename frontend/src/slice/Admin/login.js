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

export const loginUser = createAsyncThunk('user/loginUser', async (formdata , {rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:3000/api/authUser/login', formdata)
        localStorage.setItem('token', response.data.token);
        saveToken(response.data.token);
        // saveUserRole(response.data.user.role);
        return { data :response.data, token: response.data.token, role: response.data.user.role };
    } catch (error) {
        return rejectWithValue(error.response.data);

    }
})

export const userLoginSlice = createSlice({
        name: 'userlogin',
        initialState: {
            token: null,
            role: null,
        },
        reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending , (state)=>{
            state.loading= true
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading= false,
            state.user = action.payload
            state.message = action.payload.message
        })
        .addCase(loginUser.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.payload.message;
        });
    }
})


export default userLoginSlice.reducer
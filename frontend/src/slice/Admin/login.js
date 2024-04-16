import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    error:null,
    user: {},
    token: null,
    email : '',
    password: ''
}

export const loginUser = createAsyncThunk('user/loginUser', async (formdata , {rejectWithValue})=>{
    try {
        const response = await axios.post('http://localhost:3000/api/authUser/login', formdata)
        console.log(response.data)
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);

    }

})

export const userLoginSlice = createSlice({
        name: 'userlogin',
        initialState,
        reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending , (state)=>{
            state.loading= true
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.loading= false,
            state.user = action.payload
        })
        .addCase(loginUser.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.payload.message;
        });
    }
})


export default userLoginSlice.reducer
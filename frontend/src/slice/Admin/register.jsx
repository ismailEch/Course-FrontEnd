import { createSlice , createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    error:null,
    user: {},
    FirstName : '',
    LastName : '',
    email : '',
    password: ''
}

export const registerUser = createAsyncThunk('user/registerUser', async (formdata , {rejectWithValue})=>{
    try {
        console.log(formdata)
        const response = await axios.post('http://localhost:3000/api/authUser/singup', formdata)
        console.log(response.data);
        return(response)
    } catch (error) {
        return rejectWithValue(error.response.data);

    }

})

export const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(registerUser.pending , (state)=>{
            state.loading= true
        })
        .addCase(registerUser.fulfilled,(state, action)=>{
            state.loading= false,
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => { 
            state.loading = false;
            state.error = action.payload.message;
        });
    }
})


export default userSlice.reducer
import {configureStore}  from '@reduxjs/toolkit'
import planReducer from './slice/planSlice'
import userReducer from './slice/Admin/register'
import userLogin from './slice/Admin/login'

const store = configureStore({
    reducer:{
        plans:planReducer,
        user : userReducer,
        userlogin : userLogin
    }
})

export default store ;
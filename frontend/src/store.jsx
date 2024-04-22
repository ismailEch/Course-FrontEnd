import {configureStore}  from '@reduxjs/toolkit'
import planReducer from './slice/Admin/Plan/planSlice'
//this slice is for register
import userReducer from './slice/Admin/register'
import userLogin from './slice/Admin/login'
//this is for get users infos
import userInfoReducer from './slice/Admin/users'

const store = configureStore({
    reducer:{
        plans:planReducer,
        user : userReducer,
        userlogin : userLogin ,
        usersInfo : userInfoReducer
    }
})

export default store ;
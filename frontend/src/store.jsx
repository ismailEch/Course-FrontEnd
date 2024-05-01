import {configureStore}  from '@reduxjs/toolkit'
import planReducer from './slice/Admin/Plan/planSlice'
//this slice is for register
import userReducer from './slice/Admin/register'
import userLogin from './slice/Admin/login'
//this is for get users infos
import userSliceReducer from './slice/Admin/User/userSlice';

import categoriesReducer from './slice/Admin/Category/categorySlice';

import teacherReducer from './slice/Admin/Teacher/teacherSlice';

//teacher reducer
import registerTeacherReducer from './slice/Teacher/registerTeacher';
import loginTeacherReducer from './slice/Teacher/loginTeacher';


const store = configureStore({
    reducer:{
        plans:planReducer,
        registration: userReducer,
        userlogin : userLogin,
        users: userSliceReducer,
        categories: categoriesReducer,
        teachers: teacherReducer, 

        registerTeacher : registerTeacherReducer,
        loginTeacher : loginTeacherReducer,

    }
})

export default store ;
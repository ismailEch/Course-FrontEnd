import {configureStore}  from '@reduxjs/toolkit'
import planReducer from './slice/Admin/Plan/planSlice'
//this slice is for register
import userReducer from './slice/Admin/register'
import userLogin from './slice/Admin/login'
//this is for get users infos
import userSliceReducer from './slice/Admin/User/userSlice';

import categoriesReducer from './slice/Admin/Category/categorySlice';

import teacherReducer from './slice/Admin/Teacher/teacherSlice';
import coursesReducer from './slice/Admin/Courses/CoursesSlice'

//teacher reducer
import registerTeacherReducer from './slice/Teacher/registerTeacher';
import loginTeacherReducer from './slice/Teacher/loginTeacher';

//course reducer
// import courseReducer from './slice/Teacher/Course/courseSlice'
import courseTeacherReducer from './slice/Teacher/Course/courseSlice';


const store = configureStore({
    reducer:{
        plans:planReducer,
        registration: userReducer,
        userlogin : userLogin,
        users: userSliceReducer,
        categories: categoriesReducer,
        teachers: teacherReducer, 
        courses: coursesReducer, 

        registerTeacher : registerTeacherReducer,
        loginTeacher : loginTeacherReducer,

        // course : courseReducer
        courseTeacher: courseTeacherReducer,
    }
})

export default store ;
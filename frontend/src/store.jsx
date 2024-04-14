import {configureStore}  from '@reduxjs/toolkit'
import planReducer from './slice/planSlice'

const store = configureStore({
    reducer:{
        plans:planReducer
    }
})

export default store ;
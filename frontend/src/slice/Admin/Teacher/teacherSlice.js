import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as teacherApi from './teacherApi';

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async () => {
    return await teacherApi.fetchAllTeachers();
});

export const removeTeacher = createAsyncThunk(
    'teachers/removeTeacher',
    async (teacherId) => {
        return await teacherApi.deleteTeacher(teacherId);
    }
);

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
        teachers: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.loading = false;
                state.teachers = action.payload;
            })
            .addCase(fetchTeachers.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeTeacher.fulfilled, (state, action) => {
                state.teachers = state.teachers.filter((teacher) => teacher._id !== action.payload._id);
            });
    },
});

export default teacherSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCoursesByInstructorId } from './courseApi';

export const fetchCourses = createAsyncThunk('coursesTeacher/fetchCourses', async (teacherID) => {
    const response = await fetchCoursesByInstructorId(teacherID);
    return response.data.courses;
});

const courseTeacherSlice = createSlice({
    name: 'coursesTeacher',
    initialState: {
        courses: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default courseTeacherSlice.reducer;

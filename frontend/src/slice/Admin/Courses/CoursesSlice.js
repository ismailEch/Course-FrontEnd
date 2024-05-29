import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as coursesApi from './CoursesApi';

export const fetchData = createAsyncThunk('courses/fetchData', async () => {
    const response = await coursesApi.fetchAllCourses();
    // console.log('Thunk response:', response); // Log the response
    return response;
});

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { } = coursesSlice.actions;
export default coursesSlice.reducer;

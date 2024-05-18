// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from './userApi';

// Async Thunks
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return await userApi.fetchAllUsers();
});

export const removeUser = createAsyncThunk(
    'users/removeUser',
    async (userId) => {
        return await userApi.deleteUser(userId);
    }
);

export const updateUserRole = createAsyncThunk('users/updateUserRole', async ({ userId, newRole }) => {
    return await userApi.updateUserRole(userId, newRole);
});

// Initial State
const initialState = {
    users: [],
    loading: false,
    error: null,
};

// Slice
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user._id !== action.payload._id);
            })
            .addCase(updateUserRole.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user._id === action.payload._id);
                if (index !== -1) {
                    state.users[index].role = action.payload.role;
                }
            });
    },
});

export default userSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as categoryApi from './categoryApi';

export const fetchData = createAsyncThunk('categories/getCategory', async () => {
    return await categoryApi.fetchAllCategories();
});

export const createNewCategory = createAsyncThunk(
    'categories/createNewCategory',
    async (CategoryData) => {
        return await categoryApi.createCategory(CategoryData); 
    }
);

export const updateExistingCategory = createAsyncThunk(
    'categories/updateExistingCategory',
    async ({ id, categoryData }) => {
        return await categoryApi.updateCategory(id, categoryData);
    }
);


export const removeCategory = createAsyncThunk(
    'categories/removeCategory',
    async (CategoryId) => {
        return await categoryApi.deleteCategory(CategoryId);
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {
        addCategory(state, action) {
            state.categories.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(createNewCategory.fulfilled, (state, action) => {
                state.categories.push(action.payload); 
            })
            .addCase(updateExistingCategory.fulfilled, (state, action) => {
                const { _id, ...updatedCategory } = action.payload;
                const existingCategoryIndex = state.categories.findIndex((category) => category._id === _id);
                if (existingCategoryIndex !== -1) {
                    state.categories[existingCategoryIndex] = { _id, ...updatedCategory };
                }
            })
            .addCase(removeCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter((category) => category._id !== action.payload._id);
            });
    },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;

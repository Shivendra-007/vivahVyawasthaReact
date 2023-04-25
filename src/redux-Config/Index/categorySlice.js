 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchCategory = createAsyncThunk("category/fetchCategory",async()=>{
    let response = await axios.get();
    return response.data;
});
const slice = createSlice({
    name: 'category',
    initialState:{
        categoryList: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchCategory.fulfilled,(state,action)=>{
            state.categoryList = action.payload.categories;
            state.isLoading = false;
        }).addCase(fetchCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "something went wrong";
        })
    }
});

export default slice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import WebApi from "../../WebApi/api";

export const fetchMakeupartist = createAsyncThunk("makeupartist/fetchMakeupartist",async()=>{
   let response = await axios.get("http://localhost:6062/makeup/view");
   if(response.data.status)
   console.log(response)
     return response.data.makeupartists;
});
const slice = createSlice({
    name: 'makeupartist',
    initialState:{
        makeupartistList:[],
        isLoading: false,
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMakeupartist.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchMakeupartist.fulfilled,(state,action)=>{
            state.recentProductList = action.payload;
            state.isLoading = false;
        }).addCase(fetchMakeupartist.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});

export default slice.reducer;
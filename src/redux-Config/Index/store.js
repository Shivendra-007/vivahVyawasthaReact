import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice"; 
import makeupartistSlice from "./makeupartistSlice";

const store=configureStore({

    reducer:{
        category:categorySlice,
        makeupartist:makeupartistSlice
    }    
});
export default store
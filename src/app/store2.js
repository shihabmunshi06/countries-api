import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/rtk";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (defmids)=>{
        defmids.concat(apiSlice.middleware)
    }
})
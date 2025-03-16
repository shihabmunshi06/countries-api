import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./features/apiSlice";
import dropdownSlice from "./features/dropdownSlice";
import searchSlice from "./features/searchSlice";
import navigationSlice from "./features/navigationSlice"

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        dropdown: dropdownSlice,
        search: searchSlice,
        navigation: navigationSlice
    },
    middleware: (defmids) => defmids().concat(apiSlice.middleware)

})

export default store
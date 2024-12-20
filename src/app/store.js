import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./features/countriesSlice";
import countrySlice from "./features/countrySlice";
import searchSlice from "./features/searchSlice";
import dropdownSlice from "./features/dropdownSlice";
import borderSlice from "./features/borderSlice";
export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    country: countrySlice,
    search: searchSlice,
    dropdown: dropdownSlice,
    border: borderSlice,
  },
});

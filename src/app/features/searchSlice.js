import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  text: "",
};

const countrySlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.text = action.payload
    },

    clearSearch: (state) => {
      state.text = "";
    },
  },
});
export default countrySlice.reducer;
export const { setSearch, clearSearch } = countrySlice.actions;

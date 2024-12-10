import { createSlice } from "@reduxjs/toolkit";

let initialState = {};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    added: (state, action) => {
      return action.payload;
    },
  },
});

export default countrySlice.reducer;
export const { added } = countrySlice.actions;

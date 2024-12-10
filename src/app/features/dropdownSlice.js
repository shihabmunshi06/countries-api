import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  status: "",
  data: [],
  error: "",
};

export const fetchDropdown = createAsyncThunk(
  "dropdown/fetchRegion",
  async (region) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    return response.data;
  }
);

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDropdown.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDropdown.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDropdown.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dropdownSlice.reducer;

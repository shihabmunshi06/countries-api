import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  status: "",
  data: [],
  error: "",
};

export const fetchquery = createAsyncThunk(
  "search/fetchQuery",
  async (text) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${text}`
    );
    return response.data;
  }
);

const countrySlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchquery.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchquery.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchquery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
export const { added } = countrySlice.actions;

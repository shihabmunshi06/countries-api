import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  status: "",
  data: [],
  error: "",
  query: "",
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
  reducers: {
    clearSearch: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchquery.pending, (state, action) => {
        state.query = action.meta.arg;
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
export const { clearSearch } = countrySlice.actions;

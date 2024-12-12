import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  status: "",
  data: {},
  error: "",
  history: [],
};

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async (cca3) => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${cca3}`
    );
    return response.data[0];
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    goback: (state) => {
      if (state.history.length > 1) {
        state.history.pop();
        state.data = state.history[state.history.length - 1];
      }
    },
    resetHistory: (state) => {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.history.push(action.payload);
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;
export const { goback, resetHistory } = countrySlice.actions;

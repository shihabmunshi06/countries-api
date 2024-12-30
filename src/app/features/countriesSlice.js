import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    // const url = "https://restcountries.com/v3.1/all"
    const url2 = "https://restcountries.com/v3.1/independent?status=true";
    const response = await axios.get(url2);
    return response.data.slice(0,5);
  }
);

let initialState = {
  status: "",
  data: [],
  error: "",
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;

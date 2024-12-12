import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  status: "",
  data: [],
  error: "",
};
export const fetchBorder = createAsyncThunk(
  "border/fetchBorder",
  async (borderArray) => {
    const urls = borderArray.map(
      (e) => `https://restcountries.com/v3.1/alpha/${e}`
    );
    const requests = urls.map((url) => axios.get(url));

    //need to catch the response seprately cause axios.all will execute and return
    const borderArrayget = axios.all(requests).then((responses) => {
      const borderNames = responses.map(
        (response) => response.data[0].name.common
      );
      return borderNames;
    });

    const borderNames = await borderArrayget;
    return borderNames;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBorder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBorder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBorder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countrySlice.reducer;

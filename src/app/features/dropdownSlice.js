import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  region: "",
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    setDropDown: (state, action) => {
      state.region = action.payload
    },
    clearDropdown: (state) => {
      state.region = "";
    },
  }
});

export default dropdownSlice.reducer;
export const { setDropDown, clearDropdown } = dropdownSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 550,
  height: 1440,
};

export const stairHeightWidthSlice = createSlice({
  name: "stairHeightWidth",
  initialState,
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const { setWidth, setHeight } = stairHeightWidthSlice.actions;

export default stairHeightWidthSlice.reducer;

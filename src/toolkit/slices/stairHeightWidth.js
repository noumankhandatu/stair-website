import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: null,
  height: null,
  leftArrow: null,
  bottomArrow: null,
  topArrow: null,
  rightArrow: null,
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
    leftArrow: (state, action) => {
      state.leftArrow = action.payload;
    },
    rightArrow: (state, action) => {
      state.rightArrow = action.payload;
    },
    topArrow: (state, action) => {
      state.topArrow = action.payload;
    },
    bottomArrow: (state, action) => {
      state.bottomArrow = action.payload;
    },
  },
});

export const { setWidth, setHeight, leftArrow, rightArrow, topArrow, bottomArrow } =
  stairHeightWidthSlice.actions;

export default stairHeightWidthSlice.reducer;

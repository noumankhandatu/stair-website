import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: null,
  height: 2795,
  leftArrow: null,
  bottomArrow: null,
  topArrow: null,
  rightArrow: null,
  headCheckerVerticalArrow: null,
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
    setLeftArrow: (state, action) => {
      state.leftArrow = action.payload;
    },
    setRightArrow: (state, action) => {
      state.rightArrow = action.payload;
    },
    setTopArrow: (state, action) => {
      state.topArrow = action.payload;
    },
    setBottomArrow: (state, action) => {
      state.bottomArrow = action.payload;
    },
    setheadCheckerVerticalArrow: (state, action) => {
      state.headCheckerVerticalArrow = action.payload;
    },
  },
});

export const {
  setWidth,
  setHeight,
  setLeftArrow,
  setRightArrow,
  setTopArrow,
  setBottomArrow,
  setheadCheckerVerticalArrow,
} = stairHeightWidthSlice.actions;

export const ArrowHeight = (state) => state.stairHeightWidthSlice.height;
export const ArrowWidth = (state) => state.stairHeightWidthSlice.width;
export const WindRun1 = (state) => state.stairHeightWidthSlice.rightArrow;
export const WindRun2 = (state) => state.stairHeightWidthSlice.bottomArrow;
export const headCheckerVerticalArrow = (state) =>
  state.stairHeightWidthSlice.headCheckerVerticalArrow;

export default stairHeightWidthSlice.reducer;

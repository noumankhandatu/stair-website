import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDivisble: true,
};

export const SingleFeatures = createSlice({
  name: "SingleFeatures",
  initialState,
  reducers: {
    setIsDivisible: (state, action) => {
      state.isDivisble = action.payload;
    },
  },
});

export const { setIsDivisible } = SingleFeatures.actions;
export const selectDivisble = (state) => state.SingleFeatures.isDivisble;

export default SingleFeatures.reducer;

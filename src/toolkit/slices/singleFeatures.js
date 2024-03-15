import { createSlice } from "@reduxjs/toolkit";
import { THREE_WINDER } from "../../utils/enum";

const initialState = {
  isDivisble: true,
  selectDefaultValue: THREE_WINDER,
  selectDefaultValuetwo: THREE_WINDER,
};

export const SingleFeatures = createSlice({
  name: "SingleFeatures",
  initialState,
  reducers: {
    setIsDivisible: (state, action) => {
      state.isDivisble = action.payload;
    },
    setSelectDefaultValue: (state, action) => {
      state.selectDefaultValue = action.payload;
    },
    setSelectDefaultValue2: (state, action) => {
      state.selectDefaultValuetwo = action.payload;
    },
  },
});

export const { setIsDivisible, setSelectDefaultValue, setSelectDefaultValue2 } =
  SingleFeatures.actions;

export const selectDivisble = (state) => state.SingleFeatures.isDivisble;
export const selectedDefaultValue = (state) => state.SingleFeatures.selectDefaultValue;
export const selectDefaultValueTwo = (state) => state.SingleFeatures.selectDefaultValuetwo;

export default SingleFeatures.reducer;

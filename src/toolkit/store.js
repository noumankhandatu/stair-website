import { configureStore } from "@reduxjs/toolkit";
import stairHeightWidthSlice from "./slices/stairHeightWidth";

export const store = configureStore({
  reducer: {
    stairHeightWidthSlice: stairHeightWidthSlice,
  },
});

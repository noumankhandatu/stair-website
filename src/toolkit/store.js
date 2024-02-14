import { configureStore } from "@reduxjs/toolkit";
import stairHeightWidthSlice from "./slices/stairHeightWidth";
import ShapeSlice from "./slices/shapes";
import shapeTurnSlice from "./slices/shapeTurns";

export const store = configureStore({
  reducer: {
    stairHeightWidthSlice: stairHeightWidthSlice,
    ShapeSlice: ShapeSlice,
    shapeTurnSlice: shapeTurnSlice,
  },
});

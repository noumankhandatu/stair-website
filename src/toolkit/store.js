import { configureStore } from "@reduxjs/toolkit";
import stairHeightWidthSlice from "./slices/stairHeightWidth";
import ShapeSlice from "./slices/shapes";
import shapeTurnSlice from "./slices/shapeTurns";
import featureStepsSlice from "./slices/featureSteps";
import SingleFeatures from "./slices/singleFeatures";
import GlobalStairsLayoutSlice from "./globalSlice/index";

export const store = configureStore({
  reducer: {
    stairHeightWidthSlice: stairHeightWidthSlice,
    ShapeSlice: ShapeSlice,
    shapeTurnSlice: shapeTurnSlice,
    featureStepsSlice: featureStepsSlice,
    SingleFeatures: SingleFeatures,
    // global
    GlobalStairsLayoutSlice: GlobalStairsLayoutSlice,
  },
});

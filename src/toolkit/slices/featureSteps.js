import { createSlice } from "@reduxjs/toolkit";
import { NONE_STEP_LEFT, NONE_STEP_RIGHT } from "../../utils/enum";

const initialState = {
  leftFeatureStep: NONE_STEP_LEFT,
  rightFeatureStep: NONE_STEP_RIGHT,
};

const featureStepsSlice = createSlice({
  name: "featureSteps",
  initialState,
  reducers: {
    setLeftFeatureStep(state, action) {
      state.leftFeatureStep = action.payload;
    },
    setRightFeatureStep(state, action) {
      state.rightFeatureStep = action.payload;
    },
  },
});

export const { setLeftFeatureStep, setRightFeatureStep } = featureStepsSlice.actions;

export const leftFeatureStep = (state) => state.featureStepsSlice.leftFeatureStep;
export const rightFeatureStep = (state) => state.featureStepsSlice.rightFeatureStep;

export default featureStepsSlice.reducer;

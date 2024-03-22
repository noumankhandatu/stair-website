import { createSlice } from "@reduxjs/toolkit";

const riserHeight = 220;

const calculateRisers = (floorHeight) => {
  const numberOfRisers = Math.ceil(floorHeight / riserHeight);
  const risersArray = Array.from(
    { length: numberOfRisers },
    (_, index) => (index + 1) * riserHeight
  );
  risersArray.push(risersArray[risersArray.length - 1] + riserHeight);
  return risersArray;
};

const initialFloorHeight = 2600;
const initialFloorHeightRisers = calculateRisers(initialFloorHeight);
const initialThreadTurnZero = initialFloorHeightRisers.slice(0, -6);

const initialState = {
  floorHeight: initialFloorHeight,
  floorHeightRisers: initialFloorHeightRisers,
  threadTurnZero: initialThreadTurnZero,
  threadTurnOne: [],
  threadTurnTwo: [],
};

const GlobalStairsLayoutSlice = createSlice({
  name: "stairsLayout",
  initialState,
  reducers: {
    setFloorHeight(state, action) {
      state.floorHeight = action.payload;
      state.floorHeightRisers = calculateRisers(action.payload);
      state.threadTurnZero = state.floorHeightRisers.slice(0, -6);
    },
  },
});

export const { setFloorHeight } = GlobalStairsLayoutSlice.actions;
export const GlobalSliceData = (state) => state.GlobalStairsLayoutSlice;

export default GlobalStairsLayoutSlice.reducer;

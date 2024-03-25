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
const initialDefaultThread = initialFloorHeightRisers.slice(0, -6);
const initialThreadTurnOne = initialDefaultThread.slice(0, 4);
const initialThreadTurnTwo = initialDefaultThread.slice(-1);
const initialThreadTurnThree = initialDefaultThread.slice(-3);

const initialState = {
  floorHeight: initialFloorHeight,
  floorHeightRisers: initialFloorHeightRisers,
  defaultThread: initialDefaultThread,
  threadTurnOne: initialThreadTurnOne,
  threadTurnTwo: initialThreadTurnTwo,
  threadTurnThree: initialThreadTurnThree,
};

const GlobalStairsLayoutSlice = createSlice({
  name: "stairsLayout",
  initialState,
  reducers: {
    setFloorHeight(state, action) {
      state.floorHeight = action.payload;
      state.floorHeightRisers = calculateRisers(action.payload);
      state.defaultThread = state.floorHeightRisers.slice(0, -6);
    },
    setThreadOne(state, action) {
      const risersForTurnOne = action.payload;
      state.defaultThread.length - risersForTurnOne;
      state.threadTurnOne = state.defaultThread.slice(0, risersForTurnOne);
      state.threadTurnThree = state.defaultThread.slice(risersForTurnOne);
    },
    setThreadTwo(state, action) {
      const risersForTurnTwo = action.payload;
    },
  },
});

export const { setFloorHeight, setThreadOne, setThreadTwo } = GlobalStairsLayoutSlice.actions;
export const GlobalSliceData = (state) => state.GlobalStairsLayoutSlice;

export default GlobalStairsLayoutSlice.reducer;

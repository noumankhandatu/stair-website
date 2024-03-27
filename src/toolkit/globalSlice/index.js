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
const initialThreadTurnThree = initialDefaultThread.slice(0, 3);
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
      state.threadTurnOne = state.defaultThread.slice(0, risersForTurnOne);
      const remainingRisers = state.defaultThread.length - risersForTurnOne;
      state.threadTurnThree = Array.from(
        { length: remainingRisers },
        (_, index) => 220 + index * riserHeight
      );
    },
    setThreadTwo(state, action) {
      const risersToAdd = action.payload;
      const initialThreadTurnTwoLength = initialThreadTurnTwo.length;

      if (risersToAdd === 0) {
        const initialValue = 0;
        state.threadTurnThree = state.threadTurnTwo.map(
          (riser, index) => initialValue + (index + 1) * riserHeight
        );
        state.threadTurnTwo = [];
      } else if (risersToAdd === 1) {
        const initialValue = 0;
        state.threadTurnThree = state.threadTurnTwo.map(
          (riser, index) => initialValue + (index + 1) * riserHeight
        );
        state.threadTurnTwo =  [initialThreadTurnTwo[0]]     ;
      } else {
        state.threadTurnTwo = [
          initialThreadTurnTwo[0],
          ...Array.from(
            { length: risersToAdd - 1 },
            (_, index) => initialThreadTurnTwo[0] - (index + 1) * riserHeight
          ),
        ];
      }

      // Adjust threadTurnThree
      const difference = state.threadTurnTwo.length - initialThreadTurnTwoLength;
      if (difference > 0) {
        // Increase in threadTurnTwo length, decrease same number of elements from threadTurnThree
        state.threadTurnThree.splice(-difference, difference);
      } else if (difference < 0) {
        // Decrease in threadTurnTwo length, increase same number of elements in threadTurnThree
        const risersToAddToThreadThree = Math.abs(difference);
        const lastRiserInThreadThree = state.threadTurnThree[state.threadTurnThree.length - 1];
        const newRisersForThreadThree = Array.from(
          { length: risersToAddToThreadThree },
          (_, index) => lastRiserInThreadThree + (index + 1) * riserHeight
        );
        state.threadTurnThree = state.threadTurnThree.concat(newRisersForThreadThree);
      }
    },
  },
});

export const { setFloorHeight, setThreadOne, setThreadTwo } = GlobalStairsLayoutSlice.actions;
export const GlobalSliceData = (state) => state.GlobalStairsLayoutSlice;

export default GlobalStairsLayoutSlice.reducer;

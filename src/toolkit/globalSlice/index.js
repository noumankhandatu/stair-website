import { createSlice } from "@reduxjs/toolkit";

const riserHeight = 220;
const individualGoing = 220;
const widthRun2 = 865;
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
const initialThreadTurnThree = initialDefaultThread.slice(0, 2);

const initialState = {
  floorHeight: initialFloorHeight,
  floorHeightRisers: initialFloorHeightRisers,
  defaultThread: initialDefaultThread,
  threadTurnOne: initialThreadTurnOne,
  threadTurnTwo: initialThreadTurnTwo,
  threadTurnThree: initialThreadTurnThree,
  individualGoing: individualGoing,
  widthRun2: widthRun2,
};
const GlobalStairsLayoutSlice = createSlice({
  name: "stairsLayout",
  initialState,
  reducers: {
    setFloorHeight(state, action) {
      const newFloorHeight = action.payload;
      const currentFloorHeight = state.floorHeight;
      const riserDifference = Math.ceil((newFloorHeight - currentFloorHeight) / riserHeight);

      // Update floorHeight and floorHeightRisers
      state.floorHeight = newFloorHeight;
      state.floorHeightRisers = calculateRisers(newFloorHeight);

      // Update threadTurnThree based on riser difference
      if (riserDifference > 0) {
        // Increase in floor height, increase the number of risers in threadTurnThree
        const newThreadThreeLength = state.threadTurnThree.length + riserDifference;
        state.threadTurnThree = Array.from(
          { length: newThreadThreeLength },
          (_, index) => 220 + index * riserHeight
        );

        // Increase defaultThread accordingly
        const defaultThreadDifference = riserDifference + 6; // Compensate for the 6 risers removed in initialDefaultThread
        state.defaultThread = calculateRisers(newFloorHeight).slice(0, -defaultThreadDifference);
      } else if (riserDifference < 0) {
        // Decrease in floor height, remove the corresponding number of risers from threadTurnThree
        state.threadTurnThree.splice(riserDifference);

        // If both threadTurnOne and threadTurnThree are empty, decrease threadTurnTwo
        if (state.threadTurnOne.length === 0 && state.threadTurnThree.length === 0) {
          const newLength = state.threadTurnTwo.length + riserDifference; // riserDifference is negative
          state.threadTurnTwo = state.threadTurnTwo.slice(0, newLength);
        } else if (state.threadTurnThree.length === 0) {
          // If threadTurnThree is empty, but threadTurnOne is not, decrease threadTurnOne
          const newLength = state.threadTurnOne.length + riserDifference; // riserDifference is negative
          state.threadTurnOne = state.threadTurnOne.slice(0, newLength);
        }
      }
    },
    setThreadOne(state, action) {
      const risersForTurnOne = action.payload;
      state.threadTurnOne = state.defaultThread.slice(0, risersForTurnOne);
      const remainingRisers = state.defaultThread.length - risersForTurnOne;
      state.threadTurnThree = Array.from(
        { length: remainingRisers - 1 },
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
        state.threadTurnTwo = [initialThreadTurnTwo[0]];
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
    setIndividualGoing(state, action) {
      state.individualGoing = action.payload;
    },
    setWidthRun2(state, action) {
      state.widthRun2 = action.payload;
    },
  },
});

export const { setFloorHeight, setThreadOne, setThreadTwo, setIndividualGoing, setWidthRun2 } =
  GlobalStairsLayoutSlice.actions;

export const GlobalSliceData = (state) => state.GlobalStairsLayoutSlice;

export default GlobalStairsLayoutSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ThreeWinderRightTurn } from "../../utils/enum";

const initialState = {
  shapeTurn: ThreeWinderRightTurn,
  halfLandingTurn: null,
};

export const shapeTurnSlice = createSlice({
  name: "shapeTurnSlice",
  initialState,
  reducers: {
    setShapeTurn: (state, action) => {
      state.shapeTurn = action.payload;
    },
    setHalfLandingTurn: (state, action) => {
      state.halfLandingTurn = action.payload;
    },
  },
});

export const { setShapeTurn ,setHalfLandingTurn} = shapeTurnSlice.actions;
export const selectShapeTurn = (state) => state.shapeTurnSlice.shapeTurn;
export const selectHalfLandingTurn = (state) => state.shapeTurnSlice.halfLandingTurn;

export default shapeTurnSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ThreeWinderRightTurn } from "../../utils/enum";

const initialState = {
  shapeTurn: ThreeWinderRightTurn,
};

export const shapeTurnSlice = createSlice({
  name: "shapeTurnSlice",
  initialState,
  reducers: {
    setShapeTurn: (state, action) => {
      state.shapeTurn = action.payload;
    },
  },
});

export const { setShapeTurn } = shapeTurnSlice.actions;
export const selectShapeTurn = (state) => state.shapeTurnSlice.shapeTurn;

export default shapeTurnSlice.reducer;

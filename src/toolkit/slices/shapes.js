import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_SHAPE } from "../../utils/enum";

const initialState = {
  shape: DEFAULT_SHAPE,
};

export const ShapeSlice = createSlice({
  name: "ShapeSlice",
  initialState,
  reducers: {
    setShape: (state, action) => {
      state.shape = action.payload;
    },
  },
});

export const { setShape } = ShapeSlice.actions;

export default ShapeSlice.reducer;

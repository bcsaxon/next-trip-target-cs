import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routeId: "",
  directionId: "",
};

export const RoutesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    getRouteId: (state, action) => {
      state.routeId = action.payload;
    },

    getDirectionId: (state, action) => {
      state.directionId = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { getRouteId, getDirectionId } = RoutesSlice.actions;

export default RoutesSlice.reducer;

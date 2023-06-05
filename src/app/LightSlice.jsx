import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  light: true,
  users: [],
};
export const lightSlice = createSlice({
  name: "light",
  initialState,
  reducers: {
    lightToggle: (state, { payload }) => {
      state.light = payload;
    },
    getUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});
export const { lightToggle, getUsers } = lightSlice.actions;
export default lightSlice.reducer;

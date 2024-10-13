import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Expect payload to contain user details
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

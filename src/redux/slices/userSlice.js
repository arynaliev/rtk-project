import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    lastLoginTime: "",
    isAuthenticated: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

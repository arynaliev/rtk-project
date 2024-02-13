import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";
import todoAppSlice from "./slices/todoAppSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    todoList: todoAppSlice,
  },
});

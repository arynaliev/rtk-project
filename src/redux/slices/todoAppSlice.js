import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoAppSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return {
        // returning a copy of orignal state
        ...state, //copying the original state
        todoList: [...state.todoList, action.payload],
      };
    },
    deleteTodo: (state, action) => {
      return {
        // returning a copy of orignal state
        ...state, //copying the original state
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
        // returns a new filtered todos array
      };
    },
    completeTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id !== action.payload
      ); //finding index of the item
      const newArray = [...state.todoList]; //making a new array
      newArray[index].isCompleted = true; //changing value in the new array
      return {
        ...state, //copying the orignal state
        todos: newArray, //reassingning todos to new array
      };
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoAppSlice.actions;

export default todoAppSlice.reducer;

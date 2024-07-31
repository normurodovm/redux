// redux/todo.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    editItem: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { add, editItem, deleteItem } = todoReducer.actions;
export default todoReducer.reducer;

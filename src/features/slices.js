// creating reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn Redux",
      completed: false,
    },
  ],
};

export const todoslice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
  updateTodo: (state, action) => {
    const id = action.payload.id;
    const title = action.payload.title;
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    });
  },
});

export const { addTodo, removeTodo, updateTodo } = todoslice.actions;
export default todoslice.reducer;

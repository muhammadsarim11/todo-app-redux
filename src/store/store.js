import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/slices.js";

export const store = configureStore({
  reducer: todosReducer,
});

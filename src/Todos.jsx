import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "./features/slices.js";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Todos</h1>
      <div className="space-y-4">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="p-4 bg-white shadow-md rounded-md flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold">{todo.title}</h2>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Remove Todo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;

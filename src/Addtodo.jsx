import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/slices.js";

const Addtodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter a todo");
      return;
    }
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <div className="p-4 bg-gray-100  flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 shadow-md rounded-md"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Add Todo</h1>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your todo"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;

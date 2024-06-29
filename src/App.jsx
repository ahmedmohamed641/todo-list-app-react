import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TodoInput from "./components/Todo-input/Todo-input";
import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: id, title: title, completed: false },
    ]);
    setId(id + 1);
  }

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-pink text mt-20">Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <Todo todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;

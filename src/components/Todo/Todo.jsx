import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function Todo({ todos, toggleTodo, deleteTodo }) {
  return (
    <section className="flex justify-center content-center">
      <ul className="flex flex-col w-3/6 h-64">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`text-gray-light flex gap-3 justify-around content-center items-center h-10 pl-28 pr-36 bg-pink mt-3 ${
              todo.completed ? "line-through" : ""
            }`}
          >
            <input
              onChange={() => toggleTodo(todo.id)}
              type="checkbox"
              checked={todo.completed}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

// PropTypes definition
Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;

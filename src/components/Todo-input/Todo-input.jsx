import React, { useState } from "react";
import PropTypes from "prop-types";

export function TodoInput({ addTodo }) {
  // Destructure addTodo directly
  const [inputItem, setInputItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (inputItem.trim() === "") return;

    addTodo(inputItem);
    setInputItem("");
  }

  return (
    <div className="flex justify-center content-center">
      <form
        onSubmit={handleSubmit}
        className="bg-dare-blue flex justify-center flex-row w-3/6 h-64 content-center items-center m-7"
      >
        <input
          onChange={(e) => setInputItem(e.target.value)}
          value={inputItem}
          type="text"
          id="item"
          className="w-96 text-gray-light"
          placeholder="Add Todo...."
        />
        <button
          type="submit"
          className="bg-pink pl-5 pr-5 pt pb- text-gray-light text-2xl"
        >
          +
        </button>
      </form>
    </div>
  );
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;

import React, { useState, useEffect } from "react";

const ToDoForm = (props) => {
  //    Steps for the form
  // 1) Create a form tag
  // 2) Create a piece of state to be modified
  // 3) Create a function that modifies that piece of state

  //  state to modify the variable

  const [toDoInput, setToDoInput] = useState("");

  //   handleChange function

  const handleChange = (e) => {
    setToDoInput(e.target.value);
  };

  //   handle submit function for to do list

  const handleToDoSubmit = (e) => {
    //  prevents the page from reloading
    e.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleToDoSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={toDoInput}
        onChange={handleChange}
        className="todo-input"
      />
      <button className="todo-button">Add</button>
    </form>
  );
};

export default ToDoForm;

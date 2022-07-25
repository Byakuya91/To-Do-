import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

    // props function from ToDoDisplay
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: toDoInput,
    });

    // update the state
    setToDoInput("");
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

import React, { useState, useEffect } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import Todo from "../ToDo/ToDo";

const ToDoDisplay = (props) => {
  // State to hold the ToDO items
  const [todos, setToDos] = useState([]);

  //   function to add ToDo Items
  const addToDO = (todo) => {
    //    regex to account for spaces and characters
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //   state for new ToDo item
    const newToDos = [todo, ...todos];

    // update the state
    setToDos(newToDos);
  };
  return (
    <div>
      <h1>What needs to be accomplished Today? </h1>
      <ToDoForm onSubmit={addToDO} />
      <Todo />
    </div>
  );
};

export default ToDoDisplay;

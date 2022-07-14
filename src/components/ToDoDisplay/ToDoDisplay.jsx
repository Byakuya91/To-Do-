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

  // Complete ToDos function
  const completeTodo = (id) => {
    // define updatedTodo
    let updatedTodo = todos.map((todo) => {
      //  Toggling the Todos from true to false
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // Updating the state variable with updatedTodo
    setToDos(updatedTodo);
  };

  return (
    <div>
      <h1>What needs to be accomplished Today? </h1>
      <ToDoForm onSubmit={addToDO} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
};

export default ToDoDisplay;
